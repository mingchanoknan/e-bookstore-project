 const pool = require("../config/mysql_connector");

 async function isLoggedIn (req, res, next) {
     let authorization = req.headers.authorization
 
     if (!authorization) {
         return res.status(401).send('You are not logged in')
     }
 
     let [part1, part2] = authorization.split(' ')
     if (part1 !== 'Bearer' || !part2) {
         return res.status(401).send('You are not logged in')
     }
     
     // Check token
     const [tokens] = await pool.query('SELECT * FROM token WHERE token = ?', [part2])
     const token = tokens[0]
     if (!token) {
         return res.status(401).send('You are not logged in')
     }

    // Set user
     let user;
     if (token.customer_id == null && token.admin_id != null) {
         const isAdmin = await pool.query(`SELECT * FROM admin WHERE admin_id = ?`, [token.admin_id])
         user = isAdmin[0][0]
         user["role"] = "admin"
         
     } else if (token.customer_id != null && token.admin_id == null) {
         const isCustomer = await pool.query(`SELECT * FROM customer WHERE customer_id = ?`, [token.customer_id])
         user = isCustomer[0][0]
         user["role"] = "customer"
         

     } else {
        return res.status(401).send('Token invalid!')
     }
     console.log(user)
     req.user = user
 
     next()
 }

 module.exports = {
     isLoggedIn
 }