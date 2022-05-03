const express = require("express");
const pool = require("../config/mysql_connector");
router = express.Router();
const fs = require("fs");
const { isLoggedIn } = require("../middlewares/index");




router.post("/addItem/:cartId/:ebookId", isLoggedIn, async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [addItem, col] = await conn.query(`INSERT INTO cart_item(ebook_id,cart_id) values(?,?)`, [req.params.ebookId, req.params.cartId])

        const [sumPrice, col2] = await conn.query(`SELECT sum(price) as total FROM ebook JOIN cart_item USING (ebook_id) WHERE cart_id =?`, [req.params.cartId]);
        const [updateTotalPrice, col3] = await conn.query(`UPDATE cart SET total_price=? WHERE cart_id=?`,[sumPrice[0].total,req.params.cartId])
        await conn.commit()
        res.send("Add item Successfully").status(200);
    } catch (err) {
        console.log(err)
        await conn.rollback();
        res.status(500).json(err.message)
    } finally {
        conn.release();
    }
});



router.get("/itemsInCart/:cartId", isLoggedIn, async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row, col] = await conn.query(`SELECT * FROM cart JOIN cart_item USING (cart_id) JOIN ebook USING (ebook_id) WHERE cart_id = ?`, [req.params.cartId])
        await conn.commit()
        res.send(row).status(200);
    } catch (err) {
        console.log(err)
        await conn.rollback();
        res.status(404).json(err.message)
    } finally {
        conn.release();
    }
})


router.delete("/deleteItem/:itemNo/:cartId", isLoggedIn,async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [deleteItem, col] = await conn.query(`DELETE FROM cart_item WHERE item_no = ?`, [req.params.itemNo]);
        const [sumPrice, col2] = await conn.query(`SELECT sum(price) as total FROM ebook JOIN cart_item USING (ebook_id) WHERE cart_id =?`, [req.params.cartId]);
        console.log(sumPrice)
        const [updateTotalPrice, col3] = await conn.query(`UPDATE cart SET total_price=? WHERE cart_id=?`,[sumPrice[0].total,req.params.cartId])
        await conn.commit()
        res.send("Delete item Successfully").status(200);
    }catch(err) {
        console.log(err)
        await conn.rollback();
        res.status(404).json(err.message)
    } finally {
        conn.release();
    }
})


exports.router = router;