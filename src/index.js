const express = require('express')
const {createServer} = require('http')
const path = require('path')
const realTimeServer = require('./realTimeServer')
const cookieParser = require("cookie-parser");

const app = express()
const httpserver = createServer(app)

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"))
app.use(cookieParser());

app.use(require('./routes'))

app.use( express.static( path.join(__dirname, "public") ) );

httpserver.listen(app.get("port"), ()=>{
    console.log("El servidor está corriendo en el puerto ", app.get("port"));
});
realTimeServer(httpserver)