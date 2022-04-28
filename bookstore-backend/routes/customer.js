const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

const registerSchemas = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(8),
  date_of_birth: Joi.date().optional(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
});

router = express.Router();

router.post("/customer/register", async (req, res, next) => {
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 5);
  const date_of_birth = req.body.date_of_birth;
  const fname = req.body.fname;
  const lname = req.body.lname;

  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    await registerSchemas.validateAsync(req.body, { abortEarly: false });

    const [row, col] = await conn.query(
      `insert into customer(username, password, date_of_birth, fname, lname) values (?,?,?,?,?)`,
      [username, password, date_of_birth, fname, lname]
    );

    let token = generateToken();
    await conn.query(`insert into token(customer_id, token) value(?,?)`,[row.insertId, token])
      
      await conn.commit();
    res.send("Register!").status(200);
  } catch (err) {
    conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});

router.get("/customer/login", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `SELECT * FROM customer WHERE username = ?`,
      [req.body.username]
    );

    const user = row[0];
    if (!user) {
      throw new Error("Your password or your username is incorrect");
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error("Your password or your username is incorrect");
    }
    let obj = {
      status: "Login!",
      user: user,
    };
    res.send(obj).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});

router.get("/customer/loginByToken", async (req, res, next) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {
        const [row1, field] = await conn.query(`SELECT * FROM token WHERE token = ?`, [req.body.token])

        const token = row1[0]
        if (token == undefined) {
            throw new Error("Token is Incorrect")
        }

        const [row2, field2] = await conn.query(`SELECT * FROM customer WHERE customer_id = ?`, [token.customer_id])
        
        const user = row2[0]
        res.send(user).status(200)
    }
    catch (err) {
        res.send(err.message).status(400)
    }
})

router.get("/customer/profile/:cusId", async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const [row, col] = await conn.query(`SELECT * FROM customer WHERE customer_id = ?`, [req.params.cusId])
    res.send(row).status(200);
  }catch (err) {
    res.send(err.message).status(400)
}
})
//not yet
router.put("/customer/editProfile/:cusId", async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const [row,col] = await conn.query(` UPDATE customer SET username = ?, date_of_birth = ?,fname =?, lname = ?,`)
  }catch (err) {
    res.send(err.message).status(400)
}
})

exports.router = router;
