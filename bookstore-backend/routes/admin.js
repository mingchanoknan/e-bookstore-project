const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
const { isLoggedIn } = require("../middlewares/index")
const uploader = require("../utils/profileUploader");
const fs = require("fs");
const path = require("path")
router = express.Router();

const registerSchemas = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(8),
  date_of_birth: Joi.date().optional(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  position: Joi.string().optional(),
  secretCode: Joi.string().optional(),
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
    res.status(400).send({ message: err.message })
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
    await conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});
//show profile
router.get("/admin/profile/:adminId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const [row, field] = await conn.query(
      `SELECT * FROM admin WHERE admin_id = ?`,
      [req.params.adminId]
    );
    res.send(row).status(200);
  } catch (err) {
    await conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});

const editProfileSchemas = Joi.object({
  username: Joi.string().required(),
  date_of_birth: Joi.date().optional(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
});
//edit Profile admin
router.put(
  "/admin/editProfile/:adminId", isLoggedIn,
  uploader.single('image'),
  async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
      await editProfileSchemas.validateAsync(req.body, { abortEarly: false })
      const [row, col] = await conn.query(` UPDATE admin SET username = ?,fname =?, lname = ?,date_of_birth = ? WHERE admin_id = ?`,
        [req.body.username, req.body.fname, req.body.lname, req.body.date_of_birth, req.params.adminId])
      if (!!req.file) {
        const [row, field] = await conn.query(`SELECT image_path FROM admin WHERE admin_id = ?`,
          [req.params.adminId])
          const image_existed_path = row[0].image_path
        if (image_existed_path != null) {
          fs.unlinkSync(path.join(__dirname,"..\\static" +image_existed_path));
        }
        const [addImg, col2] = await conn.query(`UPDATE admin SET image_path =? WHERE admin_id = ?`,
          [req.file.path.substr(6), req.params.adminId])
      }
      await conn.commit()
      res.send("edit profile successfully").status(200)
    } catch (err) {
      console.log(err)
      await conn.rollback();
      res.status(404).json(err.message)
    } finally {
      conn.release()
    }
  }
);

const changeSchema = Joi.object({
  old_password: Joi.string().required().min(8),
  password: Joi.string().required().min(8),
  confirm_password: Joi.string().required().valid(Joi.ref('password'))
})
router.put("/admin/changePassword/:adminId", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    await changeSchema.validateAsync(req.body, { abortEarly: false })
    const [user, col] = await conn.query(`SELECT * FROM admin WHERE admin_id = ?`, [req.params.adminId])
    if (!(await bcrypt.compare(req.body.old_password, user[0].password))) {
      throw new Error("Your old password is incorrect");
    }
    const password = await bcrypt.hash(req.body.password, 5)
    const [row, col2] = await conn.query(`UPDATE admin SET password = ? WHERE admin_id=?`,
      [password, req.params.adminId]);
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
