const mysql = require('mysql');

const {etsy_API_KEY, db_password} = require("../config.js")
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  // had trouble importing password
  database : 'product_display'
});

db.connect();

module.exports = {db};