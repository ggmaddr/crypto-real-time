import express, {Request,Response,Application} from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app:Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "crypto"
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!");
});
app.get('/db', (req: Request, res: Response):void => {
  db.query('SELECT * FROM crypto.wallet_', (err, result, fields) => {
    if (err) throw err;
    res.json(result);
    console.log(result);
  });
});
app.listen(3001, () => {
  console.log("running on port 3001");
});
