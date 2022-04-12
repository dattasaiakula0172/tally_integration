const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Book = new Schema({
    firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  contactnumber: {
    type: String
  },
  address: {
    type: String
  }
}, {
  collection: 'usersdata'
})
 
module.exports = mongoose.model('usersdata', usersdata)