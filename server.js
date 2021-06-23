let express = require('express') //connect express 
let app = express()
let server = app.listen(3000) //define port

app.use(express.static('public'))

console.log("My socket server is run") //check node server is connect

let socket = require('socket.io')
let io = socket(server)
io.sockets.on('connection', newConnection)

function newConnection(socket){
    console.log('new connection:' + socket.id) 
    //check socket io is connect and log it id
    socket.on('mouse', mouseMsg)
    //connect sketch.js mouse emit

    function mouseMsg(data){
        socket.broadcast.emit('mouse', data) //sent data to both browser
        console.log(data)
    }
    
    // console.log(socket.id)
}