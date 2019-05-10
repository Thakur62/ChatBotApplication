const mysql = require('mysql');
const express = require('express');
var app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.json());



var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hybernate_test'

});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('DB Connection successful');
    } else {
        (
            console.log('DB Connection failed \n error :' + JSON.stringify(err, undefined, 2)));
    }
});


app.listen(3000, () => console.log('Server is running @port 3000'))

app.get('/details', (req, res) => {
    mysqlConnection.query('SELECT * FROM USERINFO', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }

    })
});