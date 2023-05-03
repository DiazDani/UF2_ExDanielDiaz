const express = require('express');
const mysql = require('mysql2')
const cors=require('cors');
const app = express();

app.use(cors())
app.use(express.json());

port = 3080;

app.listen(port, ()=>{
  console.log(`el port::${port} funciona`)
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'patata',
  database: 'UniDanielDiaz'
});

/*connection.query('SELECT * FROM professor', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
*/


