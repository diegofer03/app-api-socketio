const express = require('express')
const router = express.Router()
const path = require('path')

const isLogged = require('../middleware/isLogged')

const views = path.join(__dirname, "/../views");

router.get("/", isLogged ,(req,res)=>{
    res.sendFile(views + "/index.html");
})

router.get("/register", (req,res)=>{
    res.sendFile(views + "/register.html");
})

module.exports = router