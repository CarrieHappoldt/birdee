const mysql      = require('mysql');
const express = require('express')
const path = require('path')
const app = express()

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bird'
});

connection.connect();

app.get('/api/v1/birds', (req, res, next) => {
  connection.query("SELECT * FROM birds", function (error, results, fields) {
    if (error) return next(error);
    res.json(results);
  });
});

app.get('/api/v1/birds/:id', (req, res, next) => {
  let id = req.params.id
  connection.query(`SELECT common_name, scientific_name FROM birds WHERE birds.id = ${id}`, function (error, results, fields) {
    if (error) return next(error);
    res.json(results);
  });
});

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static('public'))


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})