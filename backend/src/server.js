const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

const server = express();

mongoose.connect('mongodb+srv://zetta:zetta@clusterzetta-mcozz.mongodb.net/trabalho2?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(3333);