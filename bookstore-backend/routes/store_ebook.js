const express = require("express");
const pool = require("../config/mysql_connector")
router = express.Router();

//แสดงหนังสือทั้งหมด
router.get("/getAllBook", async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    console.log("123")
    try {
        const [row,col] = await conn.query(
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
//แสดงตามหมวดหมู่ที่เลือก
router.get("/getNovelBooks", async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row,col] = await conn.query(
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
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row,col] = await conn.query(
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
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row,col] = await conn.query(
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
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row,col] = await conn.query(
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
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        const [row,col] = await conn.query(
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

// router.get("/getSetBooks", async (req, res, next) => {
//     const conn6 = await pool.getConnection();
//     await conn6.beginTransaction();
//     try {
//         const [row,col] = await conn.query(
//             `select *from ebook
//             join publisher using (publisher_id)
//             join book_type using (type_id)
//             join author_ebook using (ebook_id)
//             join author using (author_id)
//             where type_name = "เทคโนโลยี"`
            
//         )
//         conn6.commit()
//         res.send(row).status(200)
//     } catch (err) {
//         conn6.rollback()
//         res.send("Error").status(400)
//     } finally {
//         conn6.release()
//     }
// })

router.get("/getBySetId/:setId", async (req, res, next) => {
    const set_id = req.params.setId
    const conn = await pool.getConnection()
    try {
        const [row, col] = await conn.query(
            `select * from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
             where set_id = ?`, [req.params.setId]
        )
        conn.commit()
        res.send(row).status(404)
    }
    catch (err) {
        conn.rollback()
        res.send(err.message).status(404)
    }
    finally {
        conn.release()
    }
})

router.get("/getSetBooks", async (req, res, next) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction
    try {
        const [row, col] = await conn.query(
            `select * from set_book`
        )
        conn.commit()
        res.send(row).status(200)
    } 
    catch (err) {
        conn.rollback()
        res.send(ërr.message).status(404)
    }
    finally {
        conn.release()
    }
})

//มาใหม่
router.get("/getNewBooks", async (req, res, next) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction
    try {
        const [row, col] = await conn.query(
            `select * 
            from ebook
            join admin_ebook using (ebook_id)
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            WHERE modify_type = "add" and modify_date > DATE_SUB(NOW(), INTERVAL 1 MONTH) `
        )
        conn.commit()
        res.send(row).status(200)
    } 
    catch (err) {
        conn.rollback()
        res.send(ërr.message).status(404)
    }
    finally {
        conn.release()
    }
})

//ยอดนิยม
router.get("/getPopularBooks", async (req, res, next) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction
    try {
        const [row, col] = await conn.query(
            `select * 
            from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join author_ebook using (ebook_id)
            join author using (author_id)
            WHERE average_rating between 3.5 and 5`
        )
        conn.commit()
        res.send(row).status(200)
    } 
    catch (err) {
        conn.rollback()
        res.send(ërr.message).status(404)
    }
    finally {
        conn.release()
    }
})
exports.router = router