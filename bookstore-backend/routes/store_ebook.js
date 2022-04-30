const express = require("express");
const pool = require("../config/mysql_connector")
router = express.Router();

//แสดงหนังสือทั้งหมด
router.get("/getAllBook", async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    console.log("123")
    try {
        let [row,col] = await conn.query(
            `select * from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            where deleted = 0`
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
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
            where type_name = "นิยาย" and deleted = 0`
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        conn.commit()
        res.send(row).status(200)
    } catch (err) {
        conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
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
            where type_name = "การ์ตูน" and deleted = 0`
            
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    } catch (err) {
        await conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
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

            where type_name = "ท่องเที่ยว" and deleted = 0`
            
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    } catch (err) {
        await conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
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
            where type_name = "การศึกษา" and deleted = 0`
            
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    } catch (err) {
        await conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
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
            where type_name = "เทคโนโลยี" and deleted = 0`
            
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    } catch (err) {
        await conn.rollback()
        res.send("Error").status(400)
    } finally {
        conn.release()
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
             where set_id = ? and deleted = 0`, [req.params.setId]
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    }
    catch (err) {
        await conn.rollback()
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
        await conn.commit()
        res.send(row).status(200)
    } 
    catch (err) {
        await conn.rollback()
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
            WHERE modify_type = "add" and modify_date > DATE_SUB(NOW(), INTERVAL 1 MONTH) and deleted = 0`
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    } 
    catch (err) {
        await conn.rollback()
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
            WHERE average_rating between 3.5 and 5 and deleted = 0`
        )
        for (let book of row) {
            let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
            book["author"] = author
        }
        await conn.commit()
        res.send(row).status(200)
    } 
    catch (err) {
        await conn.rollback()
        res.send(ërr.message).status(404)
    }
    finally {
        conn.release()
    }
})
exports.router = router