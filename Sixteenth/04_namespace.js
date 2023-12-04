const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '04_namespace.html'))
})

const nsp1 = io.of('/my-nsp')

nsp1.on('connection', (socket) => {
    console.log('A client connected')
    socket.emit('hello', 'Hello Everyone!')
})

httpServer.listen(3030, () => {
    console.log('Server listening on PORT: 3030')
})
