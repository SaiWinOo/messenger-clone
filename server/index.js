require('dotenv').config();
const express = require('express');
const app = express();
const socket = require('socket.io');
const cors = require('cors');
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on : ${process.env.PORT}`)
})

const io = socket(server, {
    cors : {
        origin : 'http://localhost:5173',
        methods : ['GET','POST'],
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

