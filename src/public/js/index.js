const socket = io();

const send = document.querySelector('#send-message')
const allMsgs = document.querySelector('#all-messages')

send.addEventListener("click", ()=>{
    const message = document.querySelector("#message");
    data = {
        message: message.value,
        user: document.cookie.split('=').pop()
    }
    socket.emit("message", data)
    message.value = ''
})


socket.on("message", (data)=>{
    const msg = document.createRange().createContextualFragment(`
    <div class="message">
                
        <div class="image-container">
            <img src="/images/michi.jpeg">
        </div>
        <div class="message-body">
            
            <div class="user-info">
                <span class="username">${data.user}</span>
                <span class="time">Hace 1 segundo</span>
            </div>
            <p>${data.message}</p>
        </div>
        
    </div>
    `);

    allMsgs.append(msg);
})