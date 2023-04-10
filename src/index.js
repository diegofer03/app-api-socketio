const express = require('express')
const {createServer} = require('http')
const path = require('path')
const { Server } = require('socket.io')

const app = express()
const httpserver = createServer(app)
const io = new Server(httpserver)
const socketsOnline = [];

app.use( express.static(path.join(__dirname, "views")) );

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// io.on("connection", socket => {
    // console.log("Clientes conectados: ", io.engine.clientsCount);
    // console.log("ID del socket conectado: ", socket.id)

    // socket.on("disconnect", () => {
    //     console.log("El socket " + socket.id + " se ha desconectado.");
    // }); 

    // socket.conn.once("upgrade", () => {
    //     console.log("Hemos pasado de HTTP Long-Polling a ", socket.conn.transport.name);
    // });
    // console.log(socket.id);
    //emision basica
    // socket.emit('welcome', 'conexion establecida')

    // socket.on("server", data => {
    //     console.log(data);
    // });

    // Emisión a todos
    // io.emit("everyone", socket.id + " se ha conectado 👀");

    // //almacenar sockets conectados
    // socketsOnline.push(socket.id);

    // // Emisión a uno solo
    // socket.on("last", message => {

    //     const lastSocket = socketsOnline[ socketsOnline.length - 1 ];
    //     io.to(lastSocket).emit("salute", message);

    // })

    // // on, once, off
    // socket.emit("on", "holi");
    // socket.emit("on", "holi"); 

    // socket.emit("once", "holi");
    // socket.emit("once", "holi"); 

    // socket.emit("off", "event off");

    // setTimeout(() => {
    //     socket.emit("off", "holi");
    // }, 3000);

    //emitir eventos del ciruclo
    // socket.on("circle position", position => {
    //     socket.broadcast.emit("move circle", position);
    // });

    //conexion por salas
//     socket.connectedRoom = "";

//     socket.on("connect to room", room => {

//         socket.leave(socket.connectedRoom);

//         switch (room) {

//             case "room1":
//                 socket.join("room1");
//                 socket.connectedRoom = "room1";
//                 break;

//             case "room2":
//                 socket.join("room2");
//                 socket.connectedRoom = "room2";
//                 break;

//             case "room3":
//                 socket.join("room3");
//                 socket.connectedRoom = "room3";
//                 break;

//         }

//     });

//     socket.on("message", message => {

//         const room = socket.connectedRoom;

//         io.to(room).emit("send message", {
//             message,
//             room
//         });

//     });

// });

//conexion usando namespaces
// const teachers = io.of("teachers");
// const students = io.of("students");

// teachers.on("connection", socket => {

//     console.log(socket.id + " se ha conectado a la sala de profes");

//     socket.on("send message", data => {
//         teachers.emit("message", data);
//     });

// });

// students.on("connection", socket => {

//     console.log(socket.id + " se ha conectado a la sala de estudiantes");

//     socket.on("send message", data => {
//         students.emit("message", data);
//     });

// });

io.on('connection', socket => {
    //verificar si sigue conectado
    socket.on("is connected", msg => {
        console.log(msg);
    })
})

httpserver.listen(3000);