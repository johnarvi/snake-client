const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('data', function(data) {
    console.log("server says: ", data);
  });

  return conn;
};

console.log('Connecting ...');
connect();