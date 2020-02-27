const express = require('express');
const server = express();
const PORT = process.env.PORT || 5500;

server.use(express.json());

server.get('/', () => {
  res.send('hello');
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
