const express = require("express");
const {isLoggedIn} = require("../middlewares/index")
router = express.Router();

router.get('/user/me', isLoggedIn, async (req, res, next) => {
    // req.user ถูก save ข้อมูล user จาก database ใน middleware function "isLoggedIn"
    res.json(req.user)
});

exports.router = router