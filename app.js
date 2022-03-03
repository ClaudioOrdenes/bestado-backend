'use strict'

const express = require('express');
const bodyParser =require('body-parser');
const fs=require('fs');


const app = express();



//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});



app.get('/api/get',(req, res) => {
    //const data=JSON.parse(fs.readFileSync('./src/dummy/fondos.json','utf8'));
    fs.readFile('./src/dummy/fondos.json','utf8',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(JSON.parse(data));
    })
    //res.status(200).send({ success:true, data})

})

module.exports =app;