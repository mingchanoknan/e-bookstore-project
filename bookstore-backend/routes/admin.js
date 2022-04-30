const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
router = express.Router();
// const multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "./static/uploads"); // path to save file
//   },
//   filename: function (req, file, callback) {
//     // set file name
//     callback(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });
const registerSchemas = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(8),
  date_of_birth: Joi.date().optional(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  position: Joi.string().optional(),
});
router.post("/admin/register", async (req, res, next) => {
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 5);
  const date_of_birth = req.body.date_of_birth;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const position = req.body.position;

  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    await registerSchemas.validateAsync(req.body, { abortEarly: false });

    const [row, col] = await conn.query(
      `insert into admin(username, password, date_of_birth, fname, lname, position) values (?,?,?,?,?,?)`,
      [username, password, date_of_birth, fname, lname, position]
    );

    let token = generateToken();
    await conn.query(`insert into token(admin_id, token) value(?,?)`, [
      row.insertId,
      token,
    ]);

    await conn.commit();
    res.send("Register!").status(200);
  } catch (err) {
    await conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});

router.get("/admin/login", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `SELECT * FROM admin WHERE username = ?`,
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
  } finally {
    conn.release();
  }
});
router.get("/admin/loginByToken", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row1, field] = await conn.query(
      `SELECT * FROM token WHERE token = ?`,
      [req.body.token]
    );

    const token = row1[0];
    if (token == undefined) {
      throw new Error("Token is Incorrect");
    }

    const [row2, field2] = await conn.query(
      `SELECT * FROM customer WHERE admin_id = ?`,
      [token.admin_id]
    );

    const user = row2[0];
    res.send(user).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});
//show profile
router.get("/admin/profile/:adminId", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, field] = await conn.query(
      `SELECT * FROM admin WHERE admin_id = ?`,
      [req.params.adminId]
    );
    res.send(row).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});
//edit Profile admin
// router.put(
//   "/admin/editProfile/:adminId",
//   upload.single("imageAdmin"),
//   async (req, res, next) => {
//     const conn = await pool.getConnection();
//     await conn.beginTransaction();
//     try {
//       const file = req.file;
//       if (file) {
//         const updateImg = await conn.query(
//           `UPDATE admin SET image_path = ? WHERE admin_id = ?`,
//           [file.path.substr(6), req.params.adminId]
//         );
//       }

//       const update = await conn.query(`UPDATE admin SET username = ? ,date_of_birth = ? , fname =? , lname =?, position = ? WHERE admin_id =? `,
//       [req.body.username, req.body.date_of_birth, req.body.fname, req.body.lname, req.body.position, req.params.adminId]);
//       res.send("Updated successfully").status(200);
//     } catch (err) {
//       res.send(err.message).status(400);
//     } finally {
//       conn.release();
//     }
//   }
// );

exports.router = router;
