const express = require("express");
const pool = require("../config/mysql_connector");
router = express.Router();

router.get("/report", async (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
    try {
        const [row, col] = await conn.query(
            `select modify_date, modify_type, title, fname,lname, position,resigned from admin
                JOIN admin_ebook USING (admin_id)
               JOIN ebook USING (ebook_id)
               ORDER BY modify_date`
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

router.get("/report/:adminId", async (req, res, next) => {
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
