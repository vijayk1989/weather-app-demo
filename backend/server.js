const express = require('express');
const weatherApi = require('./routes/weather');
const path = require('path');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 5500;

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, '/../frontend/build')));
server.use('/weather', weatherApi);
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;
