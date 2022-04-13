const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();

app.use(cors({
  origin: "http://localhost:8080",optionsSuccessStatus: 200
}))

// set the view engine to ejs
// set root folder for views

// Statics
app.use(express.static(path.join(__dirname, 'static')))

// Encode body
app.use(bodyParser.urlencoded({ extended: false}));


// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require("./routes/index.js");
app.use(indexRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})