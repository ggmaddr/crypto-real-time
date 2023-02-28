const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password:"password",
    database: "crypto"
})
db.connect(function(err) 
{
    if (err) throw err;
    console.log("Connected!!!");
})


app.get('/db', (req,res)=>{
    db.query('SELECT * FROM crypto.wallet_',(err, result, fields)=>{
        if (err) throw err;
        res.json(result);
        console.log(result)
        // res.send(["hello", "hi"])
    })
})

app.listen(3001, ()=>{
    console.log("running on port 3001");
    })



   
