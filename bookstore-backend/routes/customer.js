const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const upload = require("../utils/profileUploader");
const { generateToken } = require("../utils/token");
const { isLoggedIn } = require("../middlewares/index");
const uploader = require("../utils/profileUploader");


const registerSchemas = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(8),
  date_of_birth: Joi.date().optional(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
});

router = express.Router();
// regiter Customer
router.post("/customer/register", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  console.log(req.body)
  try {
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 5);
    const date_of_birth = req.body.date_of_birth;
    const fname = req.body.fname;
    const lname = req.body.lname;

    await registerSchemas.validateAsync(req.body, { abortEarly: false });

    const [row, col] = await conn.query(
      `insert into customer(username, password, date_of_birth, fname, lname) values (?,?,?,?,?)`,
      [username, password, date_of_birth, fname, lname]
    );

    let token = generateToken();
    await conn.query(`insert into token(customer_id, token) value(?,?)`, [row.insertId, token])

    const [createCart, col2] = await conn.query(`INSERT INTO cart (customer_id) values(?)`, [row.insertId])
    await conn.commit();
    res.send("Register!").status(200);
  } catch (err) {
    console.log(err)
    await conn.rollback();
    res.status(404).json(err.message)
  } finally {
    conn.release();
  }
});

router.post("/customer/login", async (req, res, next) => {
  console.log(req.body.password)
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `SELECT customer_id,username, password, date_of_birth,fname, lname,image_path FROM customer WHERE username = ?`,
      [req.body.username]
    );

    const user = row[0];
    if (!user) {
      throw new Error("Your password or your username is incorrect");
    }
    console.log(user)
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error("Your password or your username is incorrect");
    }
    user["role"] = "customer"
    const [cartId, col2] = await conn.query(`SELECT cart_id FROM cart WHERE customer_id= ? AND status_payment = 0`, [user.customer_id])
    user["cart_id"] = cartId[0]
    const token = await conn.query(`SELECT token FROM token WHERE customer_id = ?`,
      [user.customer_id])
    let obj = {
      status: "Login!",
      user: user,
      token: token[0][0]
    };
    await conn.commit()
    res.send(obj).status(200);
  } catch (err) {
    await conn.rollback()
    // res.send(err.message).status(400);
    console.log(err)
    res.status(404).json(err.message)
  } finally {
    conn.release()
  }
});

router.get("/customer/profile/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const [row, col] = await conn.query(`SELECT * FROM customer WHERE customer_id = ?`, [req.params.cusId])
    res.send(row).status(200);
    await conn.commit()
  } catch (err) {
    res.status(404).json(err.message)
  }finally {
    conn.release()
  }
})

const editProfileSchemas = Joi.object({
  username: Joi.string().required(),
  date_of_birth: Joi.date().optional(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
});

router.put("/customer/editProfile/:cusId", isLoggedIn, uploader.single('image'), async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const [row, col] = await conn.query(` UPDATE customer SET username = ?,fname =?, lname = ?,date_of_birth = ? WHERE customer_id = ?`,
      [req.body.username, req.body.fname, req.body.lname, req.body.date_of_birth,req.params.cusId])
    if (!!req.file) {
      const [addImg, col2] = await conn.query(`UPDATE customer SET image_path =? WHERE customer_id = ?`,
      [req.file.path.substr(6),req.params.cusId])
    }
    await conn.commit()
    res.send("edit profile successfully").status(200)
  } catch (err) {
    res.status(404).json(err.message)
  }finally {
    conn.release()
  }
})

router.get("/isOwnerBook/:bookId/:cusId", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `SELECT * FROM customer_ebook WHERE ebook_id = ? AND customer_id =?`,
      [req.params.bookId, req.params.cusId]
    );
    res.send(row[0]).status(200)
    await conn.commit()
  } catch (err) {
    await onn.rollback();
    res.status(404).json(err.message.data)
  } finally {
    conn.release();
  }
})

router.put("/payment/:cartId/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  const customerId = Number(req.params.cusId)
  try {
    const [ebookInCart, col] = await conn.query(`SELECT ebook_id FROM cart_item WHERE cart_id=?`, [req.params.cartId])
    for (let ebook of ebookInCart) {
      const [customer_ebook, col2] = await conn.query(`SELECT * FROM customer_ebook WHERE ebook_id=? AND customer_id=?`, [ebook.ebook_id, customerId])
      if (customer_ebook.length != 0) {
        console.log("update")
        const [updateBought, col3] = await conn.query(`UPDATE customer_ebook SET bought=1, interest=0 WHERE ebook_id=? AND customer_id=?`,
          [ebook.ebook_id, customerId])
      } else {
        const [creatBought, col4] = await conn.query(`INSERT INTO customer_ebook(bought,ebook_id,customer_id) values(1,?,?)`,
          [ebook.ebook_id, customerId])
      }
    }
    const [payStatus, col3] = await conn.query(`UPDATE cart SET status_payment=1 WHERE cart_id=?`, [req.params.cartId])
    const [createCard, col4] = await conn.query(`INSERT INTO cart(customer_id) values(?)`,[customerId])
    console.log(payStatus)

    res.send("payment already!").status(200)
    await conn.commit()
  } catch (err) {
    console.log(err)
    await conn.rollback();
    res.status(404).json(err.message)
  } finally {
    conn.release();
  }
})

//interested
router.put("/addToInterest/:bookId/:cusId", isLoggedIn, upload.single('myImage'), async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {


    const [row, col] = await conn.query(
      `INSERT INTO customer_ebook(interest,ebook_id,customer_id) values(1,?,?)`,
      [req.params.bookId, req.params.cusId]
    )
    res.send("add interested successfully")
    await conn.commit()
  } catch (err) {
    conn.rollback();
    res.status(404).json(err.message.data)
  } finally {
    conn.release();
  }
})

router.get("/interestBook/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `SELECT * FROM customer_ebook JOIN ebook USING (ebook_id)  join publisher using (publisher_id)
      join book_type using (type_id)
      where deleted = 0 And customer_id = ? AND interest = 1`,
      [req.params.cusId]
    )
    for (let book of row) {
      let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
      book["author"] = author
    }
    res.send(row).status(200)
    await conn.commit()
  } catch (err) {
    conn.rollback();
    res.status(404).json(err.message)
  } finally {
    conn.release();
  }

})

router.put("/deleteToInterest/:bookId/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `UPDATE customer_ebook SET interest = 0 WHERE ebook_id=? AND customer_id=?`,
      [req.params.bookId, req.params.cusId]
    )
    res.send("deleted interested successfully").status(200)
    await conn.commit()
  } catch (err) {
    await conn.rollback();
    console.log(err)
    res.status(404).json(err.message)
  } finally {
    conn.release();
  }
})

router.get("/getMyBook/:custId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    let [row, col] = await conn.query(
      `select * from ebook
            join publisher using (publisher_id)
            join book_type using (type_id)
            join customer_ebook using (ebook_id)
            where deleted = 0 and customer_id = ? and bought = 1`, [req.params.custId]
    )
    for (let book of row) {
      let [author, field] = await conn.query(`SELECT author_id, author_name FROM author_ebook join author using (author_id) where ebook_id=?`, [book.ebook_id])
      book["author"] = author
    }
    await conn.commit()
    res.send(row).status(200)
  } catch (err) {
    await conn.rollback()
    res.status(500).json(err.message)
  } finally {
    conn.release()
  }
})

const changeSchema = Joi.object({
  old_password: Joi.string().required().min(8),
  password: Joi.string().required().min(8),
  confirm_password: Joi.string().required().valid(Joi.ref('password'))
})
router.put("/customer/changePassword/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    await changeSchema.validateAsync(req.body,  { abortEarly: false })
    const [user, col] = await conn.query(`SELECT * FROM customer WHERE customer_id = ?`, [req.params.cusId])
    if (!(await bcrypt.compare(req.body.old_password, user[0].password))) {
      throw new Error("Your old password is incorrect");
    }
    const password = await bcrypt.hash(req.body.password, 5)
    const [row, col2] = await conn.query(`UPDATE customer SET password = ? WHERE customer_id=?`,
      [password, req.params.cusId]);
    res.send('Password change successfully').status(200)
  } catch (err) {
    console.log(err)
    await conn.rollback();
    res.status(400).send({
      message: err.message
    })
    
  } finally {
    conn.release()
  }

})

exports.router = router;
