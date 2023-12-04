const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '06_chat.html'))
})

const users = []

io.on('connection', (socket) => {
    console.log('A user connected')

    socket.on('checkUsername', (data) => {
        if (!users.includes(data.username)) {
            users.push(data.username)
            socket.emit('usernameVerified', { user: data.username })
        }
        else {
            socket.emit('usernameTaken', 'Username is already taken! please try another one')
        }
    })

    socket.on('send', (data) => {
        io.sockets.emit('message', { message: data.message, user: data.user })
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})

httpServer.listen(10000, () => {
    console.log(`Server listening on PORT: 10000`)
})
