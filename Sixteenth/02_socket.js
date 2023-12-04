const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/02_socket.html'))
})

io.on('connection', (socket) => {
    console.log('A user connected')

    setTimeout(() => {
        // socket.send('A message sent after 3 seconds timeout..') this can be handled using message event in client-side

        socket.emit('MyServerEvent', { desc: 'My first custom server event using emit method'})
    }, 3000)

    socket.on('MyClientEvent', (data) => { // handling event emitted from client-side
        console.log(data)
    })

    socket.on('disconnect', () => {  // disconnect event
        console.log('A user disconnected')
    })
})

httpServer.listen(1010, () => {
    console.log('Server listening on PORT: 1010')
})
