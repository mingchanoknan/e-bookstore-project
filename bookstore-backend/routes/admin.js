const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
const {isLoggedIn} = require("../middlewares/index")
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
  const secretCode = req.body.secretCode
const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
  
  
    if (secretCode != "webPro2022") {
    throw new Error("Secret code incorrect!")
  }
  
  
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
    console.log(err.message)
    await conn.rollback();
    // res.send(err.message).status(400);
    res.status(400).send({message: err.message})
  } finally {
    conn.release();
  }
});
//1 ลาออกแล้ว
//0 ยังไม่ลาออก
router.post("/admin/login", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, col] = await conn.query(
      `SELECT admin_id,username, password, date_of_birth,fname, lname,image_path, position FROM admin WHERE username = ? AND resigned = 0`,
      [req.body.username]
    );

    const user = row[0];
    if (!user) {
      throw new Error("Your password or your username is incorrect");
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error("Your password or your username is incorrect");
    }
    user["role"] = "admin"
    const token = await conn.query(`SELECT token FROM token WHERE admin_id = ?`,
    [user.admin_id])
    let obj = {
      status: "Login!",
      user: user,
      token: token[0][0]
    };
    res.send(obj).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});
// router.get("/admin/loginByToken", async (req, res, next) => {
//   const conn = await pool.getConnection();
//   await conn.beginTransaction();
//   try {
//     const [row1, field] = await conn.query(
//       `SELECT * FROM token WHERE token = ?`,
//       [req.body.token]
//     );

//     const token = row1[0];
//     if (token == undefined) {
//       throw new Error("Token is Incorrect");
//     }

//     const [row2, field2] = await conn.query(
//       `SELECT * FROM customer WHERE admin_id = ?`,
//       [token.admin_id]
//     );

//     const user = row2[0];
//     res.send(user).status(200);
//   } catch (err) {
//     res.send(err.message).status(400);
//   } finally {
//     conn.release();
//   }
// });
//show profile
router.get("/admin/profile/:adminId", isLoggedIn , async (req, res, next) => {
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
//   "/admin/editProfile/:adminId",isLoggedIn,
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
