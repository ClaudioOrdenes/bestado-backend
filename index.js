'use strict'

const express = require('express');
const app = require('./app');
const PORT =5000

app.listen(PORT, () =>{
    console.log(`El servidor esta escuchando y corriendo en http:localhost:${PORT}`)
})
