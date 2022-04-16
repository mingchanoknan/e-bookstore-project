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
        const [row,col] = await pool.query(
            `select * from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)`
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

router.get("/getNovelBooks", async (req, res, next) => {
    const conn2 = await pool.getConnection();
    await conn2.beginTransaction();
    try {
        const [row,col] = await pool.query(
            `select *from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            where type_name = "นิยาย"`
            
        )
        conn2.commit()
        res.send(row).status(200)
    } catch (err) {
        conn2.rollback()
        res.send("Error").status(400)
    } finally {
        conn2.release()
    }
})

router.get("/getComicBooks", async (req, res, next) => {
    const conn3 = await pool.getConnection();
    await conn3.beginTransaction();
    try {
        const [row,col] = await pool.query(
            `select *from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            where type_name = "การ์ตูน"`
            
        )
        conn3.commit()
        res.send(row).status(200)
    } catch (err) {
        conn3.rollback()
        res.send("Error").status(400)
    } finally {
        conn3.release()
    }
})

router.get("/getTravelBooks", async (req, res, next) => {
    const conn4 = await pool.getConnection();
    await conn4.beginTransaction();
    try {
        const [row,col] = await pool.query(
            `select *from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            where type_name = "ท่องเที่ยว"`
            
        )
        conn4.commit()
        res.send(row).status(200)
    } catch (err) {
        conn4.rollback()
        res.send("Error").status(400)
    } finally {
        conn4.release()
    }
})

router.get("/getTextBooks", async (req, res, next) => {
    const conn5 = await pool.getConnection();
    await conn5.beginTransaction();
    try {
        const [row,col] = await pool.query(
            `select *from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            where type_name = "การศึกษา"`
            
        )
        conn5.commit()
        res.send(row).status(200)
    } catch (err) {
        conn5.rollback()
        res.send("Error").status(400)
    } finally {
        conn5.release()
    }
})

router.get("/getTechnologyBooks", async (req, res, next) => {
    const conn6 = await pool.getConnection();
    await conn6.beginTransaction();
    try {
        const [row,col] = await pool.query(
            `select *from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            where type_name = "เทคโนโลยี"`
            
        )
        conn6.commit()
        res.send(row).status(200)
    } catch (err) {
        conn6.rollback()
        res.send("Error").status(400)
    } finally {
        conn6.release()
    }
})
exports.router = router