const express = require("express");
const pool = require("../config/mysql_connector");
router = express.Router();
const upload = require("../utils/Uploader");
const fs = require("fs");
const { isLoggedIn } = require("../middlewares/index");
const Joi = require("joi");
const path = require("path")

router.get("/bookType", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [getType, field] = await conn.query(
      `Select type_name FROM book_type`
    )
    await conn.commit();
    res.send(getType).status(200);
  }catch (err) {
    await conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
})
//delete book
// 1 ลบ
// 0 ยังไม่ลบ
router.put("/deleteBook/:bookId/:adminId",isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const deleteBook = conn.query(
      `UPDATE ebook SET deleted = 1 WHERE ebook_id = ?`,
      [req.params.bookId]
    );
    const modifyBy = conn.query(
      `INSERT INTO admin_ebook(ebook_id, admin_id,modify_type) values(?,?,?)`,
      [req.params.bookId, req.params.adminId, "delete"]
    );
    await conn.commit();
    res.send("delete successfully").status(200);
  } catch (err) {
    await conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});

const addBookSchema = Joi.object({
  title: Joi.string().required(),
  abstract: Joi.string().required(),
  price: Joi.number().required(),
  publisher: Joi.string().required(),
  author: Joi.array().items(Joi.string()),
  type: Joi.string().required(),
  set:Joi.string().optional(),
 })
router.post(
  "/addBook/:adminId",isLoggedIn,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  async (req, res, next) => {
    // console.log(req.body)
    const title = req.body.title;
    const abstract = req.body.abstract;
    const price = req.body.price;
    const publisher = req.body.publisher;
    const author = req.body.author
    const type = req.body.type;
    const set = req.body.set;
    let publisherId;
    let typeId;
    let ebookId;
    let setId;
    if (req.files == undefined) {
      return res.send("Error! Need to upload content file");
    }
    if (req.files.file == undefined && !!req.files.image) {
      fs.unlinkSync(req.files.image[0].path);
      return res.send("Error! Need to upload content file");
    }
    const book_path = req.files.file[0].path;
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
      await addBookSchema.validateAsync(req.body,  { abortEarly: false })
      const checkPublisher = await conn.query(
        `SELECT publisher_id FROM publisher WHERE publisher_name = ?`,
        [publisher]
      );
      if (checkPublisher[0].length) {
        publisherId = checkPublisher[0][0].publisher_id;
      } else {
        [addPublisher, field] = await conn.query(
          `INSERT INTO publisher(publisher_name) values(?)`,
          [publisher]
        );
        publisherId = addPublisher.insertId;
      }

      const checkType = await conn.query(
        `SELECT type_id FROM book_type WHERE type_name = ?`,
        [type]);
      if (checkType[0].length) {
        typeId = checkType[0][0].type_id
      } else {
        return res.send("Error! Type incorrect");
      }
      if (!!req.files.image) {
        const image_cover = req.files.image[0].path;
        const addBook = await conn.query(
          `INSERT INTO ebook(title, abstract, book_path,image_cover, price, publisher_id, type_id) values (?,?,?,?,?,?,?)`,
          [title, abstract, book_path.substr(6), image_cover.substr(6), price, publisherId, typeId]);
        ebookId = addBook[0].insertId
      } else {
        const addBook = await conn.query(
          `INSERT INTO ebook(title, abstract, book_path, price, publisher_id, type_id) values (?,?,?,?,?,?)`,
          [title, abstract, book_path, price, publisherId, typeId]);
          ebookId = addBook[0].insertId
      }
      if (set != null) {
        const checkSet = await conn.query(
          `SELECT set_id FROM set_book WHERE set_name = ?`,
          [set]
        );
        if (checkSet[0].length) {
          setId = checkSet[0][0].set_id
        } else {
          const addSet = await conn.query(
            `INSERT INTO set_book (set_name) values(?)`,
            [set]
          );
          setId = addSet[0].insertId
        }
        const updateSet = await conn.query(
          `UPDATE ebook SET set_id = ? WHERE ebook_id =?`,
          [setId, ebookId]
        );
      }
      for (let aut of author) {
        let [checkAuthor, field] = await conn.query(`SELECT * FROM author WHERE author_name=?`, [aut])
        // console.log(checkAuthor)
        
        if (checkAuthor.length == 0) {
          const [row, field] = await conn.query(`INSERT INTO author(author_name) values(?)`, [aut])
          await conn.query(`INSERT INTO author_ebook(ebook_id, author_id) values(?,?)`, [ebookId, row.insertId])
        }
        else if (checkAuthor.length > 0) {
          await conn.query(`INSERT INTO author_ebook(ebook_id, author_id) values(?,?)`, [ebookId, checkAuthor[0].author_id])
        }
      }

      const addManage = await conn.query(`INSERT INTO admin_ebook (ebook_id, admin_id,modify_type) values(?,?, "add")`,
      [ebookId, req.params.adminId]);
      await conn.commit();
      res.send("Add successfully").status(200)
    } catch (err) {
      console.log(err)
      await conn.rollback();
      res.status(400).send(err.message);
    } finally {
      conn.release();
    }
  }
);

const editBookSchema = Joi.object({
  title: Joi.string().required(),
  abstract: Joi.string().optional(),
  price: Joi.number().required(),
  set:Joi.string().optional(),
 })

router.put("/editBook/:bookId/:adminId",isLoggedIn,
upload.fields([
  { name: "image", maxCount: 1 },
  { name: "file", maxCount: 1 },
]),
  async (req, res, next) => {
    console.log(req.files)
    const title = req.body.title;
    const abstract = req.body.abstract;
    const price = req.body.price;
    const set = req.body.set;
    const bookId = req.params.bookId
    //const book_path = req.files.file[0].path;
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
      console.log(req.files)
      await editBookSchema.validateAsync(req.body,  { abortEarly: false })
      if (!!req.files.image) {
        const [row, field] = await conn.query(`SELECT image_cover FROM ebook WHERE ebook_id=?`, [bookId])
        const image_existed_path = row[0].image_cover
        if (image_existed_path != null) {
          // fs.unlinkSync("..\\static"+image_existed_path); 
          fs.unlinkSync(path.join(__dirname,"..\\static" +image_existed_path));

        }
        
        await conn.query(`UPDATE ebook SET image_cover=?  WHERE ebook_id=?`, [req.files.image[0].path.substr(6),bookId])
      }
      if (!!req.files.file) {
        const [row, field] = await conn.query(`SELECT book_path FROM ebook WHERE ebook_id=?`, [bookId])
        const book_existed_path = row[0].book_path
        if (book_existed_path != null) {
          fs.unlinkSync(path.join(__dirname,"..\\static" +book_existed_path));
        }
        await conn.query(`UPDATE ebook SET book_path=? WHERE ebook_id=?`, [req.files.file[0].path])
      }
      const updateBook = conn.query(`UPDATE ebook SET title=?, abstract=?,price=? WHERE ebook_id=?`, [title, abstract, price,bookId])
      let setId;
      if (set != undefined && set != null) {
        const checkSet = await conn.query(
          `SELECT set_id FROM set_book WHERE set_name = ?`,
          [set]
        );
        if (checkSet[0].length) {
          setId = checkSet[0][0].set_id
        } else {
          const addSet = await conn.query(
            `INSERT INTO set_book (set_name) values(?)`,
            [set]
          );
          setId = addSet[0].insertId
        }
        const updateSet = await conn.query(
          `UPDATE ebook SET set_id = ? WHERE ebook_id =?`,
          [setId, bookId]
        );
      }

      const addManage = await conn.query(`INSERT INTO admin_ebook (ebook_id, admin_id,modify_type) values(?,?, "edit")`,
      [bookId, req.params.adminId]);
      res.send("Update Successfully")
      await conn.commit()

    } catch (err) {
      console.log(err)
      await conn.rollback();
      res.status(400).json(err)
    } finally {
      conn.release();
    }
  }
)

exports.router = router;
