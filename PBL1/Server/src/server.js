const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv/config');
const { DB_USERNAME, DB_PASSWORD } = process.env;

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-odgx6.mongodb.net/pbl?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectedUsers = {};

io.on('connection', socket => {
    if (socket.handshake) {
        console.log('ids', socket.handshake.query)
        const { user_id, device_id } = socket.handshake.query;
        if (user_id) {
            console.log('conectando usuario ', user_id);
            connectedUsers[user_id] = socket.id;
        } else if (device_id) {
            console.log('conectando dispositivo ', device_id);
            connectedUsers[device_id] = socket.id;
        }
    }
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000);