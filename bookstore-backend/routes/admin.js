const express = require("express");
const pool = require("../config/mysql_connector");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
router = express.Router();
const multer = require('multer')

const registerSchemas = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required().min(8),
    date_of_birth: Joi.date().optional(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
  });
  router.post("/admin/register", async (req, res, next) => {
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
        `insert into admin(username, password, date_of_birth, fname, lname) values (?,?,?,?,?)`,
        [username, password, date_of_birth, fname, lname]
      );
  
      let token = generateToken();
      await conn.query(`insert into token(admin_id, token) value(?,?)`,[row.insertId, token])
        
        await conn.commit();
      res.send("Register!").status(200);
    } catch (err) {
      conn.rollback();
      res.send(err.message).status(400);
    } finally {
      conn.release();
    }
  });  

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './static/uploads') // path to save file
    },
    filename: function (req, file, callback) {
      // set file name
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
  
const upload = multer({ storage: storage })



exports.router = router;