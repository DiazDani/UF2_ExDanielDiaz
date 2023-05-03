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

/*app.post('/modifCorreu', (req, res) => {
  const { correuActual, nouCorreu } = req.body;

  connection.query(
    'SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = "alumnes" AND COLUMN_NAME = "alumn_e_mail"',
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('error al consultar la taula');
      } else {
        const columnType = results[0].COLUMN_TYPE;
        if (columnType === 'varchar(30)') {
          res.status(400).send('Ja es un varchar de 30');
        } else {
          connection.query(
            `ALTER TABLE alumnes MODIFY alumn_e_mail VARCHAR(30);`,
            (error, results) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al modificar el camp');
              } else {
                res.send('modificat correctament');
              }
            }
          );
        }
      }
    }
  );
});*/

app.get('/profe', async (req, res) => {
  connection.connect((error) => {
    if (error) {
      console.error("Error Connecting", error);
    } else {
      console.log("Connection done");
    }
  });
  connection.query(`SELECT assig_codi FROM assignatures,assignatures_professor,professor WHERE assig_codi=assigprof_assig_codi AND assigprof_prof_dni=prof_dni AND prof_nom= 'JOSEP' `, (err,rows) =>{
    if (!err) {
      res.json(rows);
    } else {
      console.error(err);
    }
  });
})
