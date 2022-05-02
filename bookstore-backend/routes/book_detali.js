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
        res.status(404).json(err.message.data)
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
            `select * from comment
            join customer using (customer_id)
            where ebook_id = ?`, [ebookId]

        )
        conn.commit()
        res.send(row).status(200)
    } catch (err) {
        conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
    }
})

router.post("/comments/:ebookId", isLoggedIn, async (req, res, next) => {
    const ebookId = req.params.ebookId
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const [row, col] = await conn.query(
            `insert into comment(comment,rate,ebook_id,customer_id) values (?,?,?,?)`, [req.body.comment, req.body.rate, ebookId,] ///ยังตืดไอดี ลค

        )
        conn.commit()
        res.send(row).status(200)
    } catch (err) {
        conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
    }
})

router.put("/comments/:commentId", isLoggedIn, async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const [row, col] = await conn.query(
            `update comment set comment =?,rate = ?
            values (?,?)`, [req.body.comment, req.body.rate, ebookId,] ///ยังตืดไอดี ลค

        )
        conn.commit()
        res.send(row).status(200)
    } catch (err) {
        conn.rollback();
        res.status(404).json(err.message.data)
    } finally {
        conn.release();
    }
})


exports.router = router;