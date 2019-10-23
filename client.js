const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AJJ");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 100);
  });

  conn.on('data', (data) => console.log("server says: ", data));

  return conn;
};



module.exports = { connect };