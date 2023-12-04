const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/03_broadcasting.html'))
})

var clients = 0

io.on('connection', (socket) => {
    clients++

    socket.emit('newClientConnect', { desc: 'Hey, Welcome!' })

    // this generates an event for all clients except the joined client (socket.broadcast.emit)
    socket.broadcast.emit('clientSize', { desc: `${clients} clients connected` })

    socket.on('disconnect', function () {
        clients--;
        socket.broadcast.emit('clientSize', { desc: `${clients} clients connected` });
    });
})

httpServer.listen(2020, () => {
    console.log('Server listening on PORT: 2020')
})
