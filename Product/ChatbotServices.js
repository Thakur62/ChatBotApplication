const express = require('express');
var app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

var DBUtility = require('./DBUtility');
app.listen(3000, () => console.log('My Express server is running @port 3000'))

app.get("/details/:id", (req, res) => {
    var id = req.params.id;
    console.log('client name ' + id)
    DBUtility.Connection
        .query(`SELECT * FROM Capability_Breakdown_Client_Mapping WHERE Client_Name='${id}'`)
        .then(data => {
            res.send(data);
            console.log(JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error(error);
        });
})


//rest api to update record into mysql database
app.put("/update", (req, res) => {
    var sno = req.body.S_NO;
    DBUtility.Connection
        .execute(`UPDATE Capability_Breakdown_Client_Mapping SET VISITED=YES WHERE SNO = ${sno}`)
        .then(data => {
            res.send('update the database successfully.');
        }).catch(error => {
            res.send(error);
            console.error(error);
        });

});