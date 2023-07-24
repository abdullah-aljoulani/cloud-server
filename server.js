'use strict'

const express = require('express')

require("dotenv").config();

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json('welcome to home page')
})
const port = process.env.PORT || 3001

app.listen(port,()=> console.log('running on port',port))