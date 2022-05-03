const express = require("express");
const { isLoggedIn } = require("../middlewares/index")
const pool = require("../config/mysql_connector");
router = express.Router();

router.get('/user/me', isLoggedIn, async (req, res, next) => {
    
    // req.user ถูก save ข้อมูล user จาก database ใน middleware function "isLoggedIn"
    const conn = await pool.getConnection();
  await conn.beginTransaction();
    try {
        const [cartId,col2] = await conn.query(`SELECT cart_id FROM cart WHERE customer_id= ? AND status_payment = 0`,[req.user.customer_id])
        req.user["cart"] = cartId[0]
        res.json(req.user)
    }catch (err) {
        console.log(err)
        await conn.rollback();
        res.status(404).json(err.message)
      } finally {
        conn.release();
      }
    
});

exports.router = router