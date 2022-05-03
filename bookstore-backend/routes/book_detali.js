const express = require("express");
const { query } = require("../config/mysql_connector");
const pool = require("../config/mysql_connector");
router = express.Router();
const { isLoggedIn } = require("../middlewares/index");
router.get("/getDetailBook/:ebookId", async (req, res, next) => {
    const ebookId = req.params.ebookId
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        // const [row,col] = await conn.query(
        //     `select * from ebook
        //     join publisher using (publisher_id)
        //     join book_type using (type_id)
        //     join author_ebook using (ebook_id)
        //     join author using (author_id)
        //     where ebook_id = ?`, [ebookId]
        // )
        let [row, col] = await conn.query(
            `select * from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            where ebook_id = ?`, [ebookId]
        )
        let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [ebookId])
        row[0]["author"] = author
        conn.commit()
        res.send(row[0]).status(200)
    } catch (err) {
        conn.rollback()
        res.status(404).json(err.message)
    } finally {
        conn.release()
    }
})

router.get("/getComments/:ebookId", async (req, res, next) => {
    const ebookId = req.params.ebookId
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const [row, col] = await conn.query(
            `select ebook_id, customer_id, username,comment,rate,comment_date, image_path from comment
            join customer using (customer_id)
            where ebook_id = ?`, [ebookId]

        )

        await conn.commit()
        res.send(row).status(200)
    } catch (err) {
        await conn.rollback()
        res.status(404).json(err.message)
    } finally {
        conn.release()
    }
})

router.post("/comments/:ebookId/:cusId", isLoggedIn, async (req, res, next) => {
    const ebookId = req.params.ebookId
    const customerId = req.params.cusId
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const [row, col] = await conn.query(
            `insert into comment(comment,rate,ebook_id,customer_id) values (?,?,?,?)`, [req.body.comment, req.body.rate, ebookId, customerId]
        );
        const [avg, col2] = await conn.query(`SELECT AVG(rate) as avgRating FROM comment WHERE ebook_id =?`, [ebookId]);
        const [updateAvgRating,col3] = await conn.query(`UPDATE ebook SET average_rating =  ? WHERE ebook_id =?`,[avg[0].avgRating, ebookId])
        await  conn.commit()
        res.send(avg[0]).status(200)
    } catch (err) {
        console.log(err)
        await conn.rollback()
        res.status(404).json(err.message)
    } finally {
        conn.release()
    }
})

router.put("/editComments/:commentId/:cusId", isLoggedIn, async (req, res, next) => {
    const ebookId = req.params.ebookId
    const customerId = req.params.cusId
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const [row, col] = await conn.query(
            `update comment set comment =?,rate = ?, WHERE ebook_id=? AND customer_id= ?`, [req.body.comment, req.body.rate, ebookId,customerId]

        )
        const [avg, col2] = await conn.query(`SELECT AVG(rate) as avgRating FROM comment WHERE ebook_id =?`, [ebookId]);
        const [updateAvgRating,col3] = await conn.query(`UPDATE ebook SET average_rating =  ? WHERE ebook_id =?`,[avg[0].avgRating, ebookId])
        conn.commit()
        res.send(row).status(200)
    } catch (err) {
        conn.rollback();
        res.status(404).json(err.message)
    } finally {
        conn.release();
    }
})

router.delete("/deleteComment/:ebookId/:cusId", isLoggedIn, async (req, res, next) => {
    const ebookId = req.params.ebookId
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row, col] = await conn.query(`DELETE FROM comment WHERE ebook_id=? AND customer_id =?`, [ebookId,req.params.cusId])
        const [avg, col2] = await conn.query(`SELECT AVG(rate) as avgRating FROM comment WHERE ebook_id =?`, [ebookId]);
        const [updateAvgRating,col3] = await conn.query(`UPDATE ebook SET average_rating =  ? WHERE ebook_id =?`,[avg[0].avgRating, ebookId])
        
        await conn.commit()
        res.send("delete Successfully").status(200)
    } catch (err) {
        console.log(err)
        await conn.rollback();
        res.status(404).json(err.message)
    } finally {
        conn.release();
    }
})


exports.router = router;