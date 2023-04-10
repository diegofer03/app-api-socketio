const socket = io();

// function checkSocketStatus() {
//     console.log("Estado del socket: ", socket.connected);
// }

// socket.on("connect", () => {

//     console.log("El socket se ha conectado: ", socket.id);
//     checkSocketStatus();

// });

// socket.on("connect_error", () => {
//     console.log("No pude conectarme 😔");
// })

// socket.on("disconnect", () => {

//     console.log("El socket se ha desconectado: ", socket.id);
//     checkSocketStatus();

// });

// socket.io.on("reconnect_attempt", () => {
//     console.log("Estoy intentado reconectarme 🤪");
// });

// socket.io.on("reconnect", () => {
//     console.log("¡Me he vuelto a conectar! 😎");
// });

// //recivir emision del server
// socket.on('welcome', (data)=>{
//     console.log(data)
// })

// //enviar emision al server
// const emitToServer = document.querySelector("#emit-to-server");
// emitToServer.addEventListener("click", () => {

//     socket.emit("server", "mensaje al servidor");

// });

// //recivir mensaje para todos los clientes
// socket.on("everyone", message => {

//     console.log(message);

// });

// //enviar mensaje a ultimo socket
// const emitToLast = document.querySelector("#emit-to-last");
// emitToLast.addEventListener("click", () => {

//     socket.emit("last", "Hola 😄");

// });
// //funcion recivida para socket especifico
// socket.on("salute", message => {
//     console.log(message);
// });

// // on, once, off
// socket.on("on", (data) => {
//     console.log("Se emite varias veces");
//     console.log(data)
// });

// socket.once("once", () => {
//     console.log("Se emite una sola vez");
// });

// const listener = () => {
//     console.log("Se apaga el evento");
    
// }

// socket.on("off", listener);

// setTimeout(() => {
//     socket.off("off", listener);
// }, 2000);

//emitir eventos para mover circulo en todos los clientes
// const circle = document.querySelector("#circle");

// const drawCircle = position => {
//     circle.style.top = position.top;
//     circle.style.left = position.left;
// }

// const drag = e => {

//     const position =  {
//         top: e.clientY + "px",
//         left: e.clientX + "px"
//     };

//     drawCircle(position);
//     socket.emit("circle position", position);

// }

// document.addEventListener("mousedown", e => {
//     document.addEventListener("mousemove", drag)
// });

// document.addEventListener("mouseup", e => {
//     document.removeEventListener("mousemove", drag);
// });

// socket.on("move circle", position => {
//     drawCircle(position);
// });

//emitir mensajes a diferentes
// Selecciono mis 3 botones que me permitirán conectarme a las salas
// const connectRoom1 = document.querySelector("#connectRoom1");
// const connectRoom2 = document.querySelector("#connectRoom2");
// const connectRoom3 = document.querySelector("#connectRoom3");

// // Eventos para que al hacer click me conecte a las salas

// connectRoom1.addEventListener("click", () => {
//     socket.emit("connect to room", "room1");
// });

// connectRoom2.addEventListener("click", () => {
//     socket.emit("connect to room", "room2");
// });

// connectRoom3.addEventListener("click", () => {
//     socket.emit("connect to room", "room3");
// });

// // Enviar mensaje

// const sendMessage = document.querySelector("#sendMessage");

// sendMessage.addEventListener("click", () => {

//     const message = prompt("Escribe tu mensaje:");

//     socket.emit("message", message);

// });

// // Recibir el evento del mensaje

// socket.on("send message", data => {

//     const { room } = data;
//     const { message } = data;

//     const li = document.createElement("li");
//     li.textContent = message;

//     document.querySelector(`#${room}`).append(li);

// });

//usando namespaces como canales OJO se elimina el uso de const socket = io()
// const user = prompt("Escribe tu usuario");

// const profes = ["RetaxMaster", "juandc", "GNDX"];

// let socketNamespace, group;

// const chat = document.querySelector("#chat");
// const namespace = document.querySelector("#namespace");

// if (profes.includes(user)) {
//     socketNamespace = io("/teachers");
//     group = "teachers";
// }
// else {
//     socketNamespace = io("/students");
//     group = "students";
// }

// socketNamespace.on("connect", () => {
//     namespace.textContent = group;
// });

// // Programando la lógica de envío de mensajes

// const sendMessage = document.querySelector("#sendMessage");
// sendMessage.addEventListener("click", () => {

//     const message = prompt("Escribe tu mensaje: ");

//     socketNamespace.emit("send message", {
//         message, user
//     });

// });

// socketNamespace.on("message", messageData => {

//     const { user, message } = messageData;

//     const li = document.createElement("li");
//     li.textContent = `${user}: ${message}`;

//     chat.append(li);
// });

//manejo offline
const send = document.querySelector("#send");
const disconnect = document.querySelector("#disconnect");
const reconnect = document.querySelector("#reconnect");

send.addEventListener("click", () => {
    
    if(socket.connected)
        socket.emit("is connected", "¡Está conectado!");

});

disconnect.addEventListener("click", () => {
    socket.disconnect();
});

reconnect.addEventListener("click", () => {
    socket.connect();
});
