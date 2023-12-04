const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/05_rooms.html'))
})

const roomno = 1

io.on('connection', (socket) => {
    socket.join('room' + roomno)
    io.sockets.in('room' + roomno).emit('connectToRoom', `You are connected to room1`)
    socket.leave('room' + roomno)
})

httpServer.listen(4040, () => {
    console.log('Server listening on PORT: 4040')
})
