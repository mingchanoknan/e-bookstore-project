const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
const { isLoggedIn } = require("../middlewares/index")

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

    const [createCart,col2] = await conn.query(`INSERT INTO cart (customerId) values(?)`,[row.insertId])
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
    const [cartId,col2] = await conn.query(`SELECT cart_id FROM cart WHERE customerId= ? AND status_payment = 0`,[user.customer_id])
    user["caet_id"] = cartId[0]
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

// router.post("/customer/loginByToken", async (req, res, next) => {
//     const conn = await pool.getConnection()
//     await conn.beginTransaction()
//     try {
//         const [row1, field] = await conn.query(`SELECT * FROM token WHERE token = ?`, [req.body.token])

//         const token = row1[0]
//         if (token == undefined) {
//             throw new Error("Token is Incorrect")
//         }

//         const [row2, field2] = await conn.query(`SELECT * FROM customer WHERE customer_id = ?`, [token.customer_id])

//         const user = row2[0]
//       res.send({user: user }).status(200)
//     }
//     catch (err) {
//       res.status(404).json(err.message.data)
//     }
// })

router.get("/customer/profile/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const [row, col] = await conn.query(`SELECT * FROM customer WHERE customer_id = ?`, [req.params.cusId])
    res.send(row).status(200);
  } catch (err) {
    res.status(404).json(err.message.data)
  }
})
//not yet
router.put("/customer/editProfile/:cusId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const [row, col] = await conn.query(` UPDATE customer SET username = ?, date_of_birth = ?,fname =?, lname = ?,`)
  } catch (err) {
    res.status(404).json(err.message.data)
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

  } catch (err) {
    conn.rollback();
    res.status(404).json(err.message.data)
  } finally {
    conn.release();
  }
})
exports.router = router;
