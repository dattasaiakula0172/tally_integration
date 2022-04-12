const express = require('express');
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
 
const bookRoute = express.Router();
let Book = require('../model/usersdata');
 
// Add Book
bookRoute.route('/signup').post((req, res, next) => {
    Book.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
module.exports = bookRoute;