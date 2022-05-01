const express = require("express");
const pool = require("../config/mysql_connector");
const {isLoggedIn} =require("../middlewares/index")
router = express.Router();

router.get("/report",isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
    try {
        const [row, col] = await conn.query(
            `select modify_date , modify_type, title, concat(fname," ",lname) as name, position,resigned from admin
                JOIN admin_ebook USING (admin_id)
               JOIN ebook USING (ebook_id)
               ORDER BY modify_date desc`
        )
      await conn.commit()
      for (let item of row) {

        item.modify_date = item.modify_date.toString().substr(0,24)
      }
        res.send(row).status(200)
  } catch (err) {
    await conn.rollback();
    res.send(err.message).status(400);
  } finally {
    conn.release();
  }
});

router.get("/report/:adminId",isLoggedIn, async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
      try {
          const [row, col] = await conn.query(
              `select modify_date, modify_type, title, fname,lname, position,resigned from admin
                  JOIN admin_ebook USING (admin_id)
                 JOIN ebook USING (ebook_id)
                 WHERE admin_id =?
                 ORDER BY modify_date`, [req.params.adminId]
          )
          await conn.commit()
          res.send(row).status(200)
    } catch (err) {
      await conn.rollback();
      res.send(err.message).status(400);
    } finally {
      conn.release();
    }
  });
exports.router = router;
