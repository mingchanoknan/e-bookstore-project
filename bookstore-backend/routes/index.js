const express = require("express");
const pool = require("../config/mysql_connector")
router = express.Router();

router.get("/getbook", (req, res, next) => {
    let obj = {name: "Harry Potter", author: "Ming"}
    res.send(obj).status(200);
})

router.get("/getAllBook", async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const result = await pool.query(
            `select *from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)`
        )
        conn.commit()
        res.send(result).status(200)
    } catch (err) {
        conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
    }
})

exports.router = router