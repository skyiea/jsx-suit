const path      = require('path');
const express   = require('express');
const http      = require('http');

const PORT = require('./tools/devPort');

const app = express();
const server = http.Server(app);

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});