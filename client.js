// establishes a connection with the game server
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Recive data from server!', data);
  })

  conn.on('connect', () => {
    conn.write('Name: ASK');
    console.log('Successfully connected to game server');
  });


  return conn;
};

module.exports = connect
