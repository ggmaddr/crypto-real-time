const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password:"",
    database: "crypto"
})
// db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );

  
app.listen(3001, ()=>{
console.log("running on port 3001");
})
app.get('/', (req,res)=>{
    res.send("hello world");
})
