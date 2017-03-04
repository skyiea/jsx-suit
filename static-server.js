const path      = require('path');
const express   = require('express');
const http      = require('http');

const PORT = require('./tools/devPort');
const PUBLIC_DIRNAME = 'public';

const app = express();
const server = http.Server(app);

app.use('/public', express.static(PUBLIC_DIRNAME));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, `${PUBLIC_DIRNAME}/html/index.html`));
});

server.listen(PORT, () => {
    console.log(`Static server started: http://localhost:${PORT}`);
    console.log(`Resources served from /${PUBLIC_DIRNAME}/`);
});