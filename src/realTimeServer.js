module.exports = httServer => {
    const { Server } = require('socket.io')
    const io = new Server(httServer)
    io.on('connection', socket => {
        console.log('connected')
        console.log(socket.id)

        socket.on("message", (data)=>{
            io.emit("message", {
                user: data.user,
                message: data.message
            });
        })
    })
}