const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/socketAPI', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'node_modules/socket.io/client-dist/socket.io.js'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '01_index.html'))
})

io.on('connection', (socket) => {
    console.log('one user connected')
})

server.listen(4000, () => {
    console.log('server running on PORT 4000')
})
