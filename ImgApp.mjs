import express from 'express';
const app = express();
const port = 8080;

import path from 'path';

// Start listening for requests on the designated port
// This can be at the beginning, or the end, or in-between.
// Conventionally it is put at the end
app.listen(port, () => console.log('The server is running. Press Ctrl+C to stop.'));

app.use(express.static('ImgGenner'));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'ImgGenner', 'index.html'));
});

app.get('/img', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'ImgGenner', 'img.png'));
});

app.push('/img', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'ImgGenner', 'img.png'));
});

