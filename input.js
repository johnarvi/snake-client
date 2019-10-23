const setupInput = function(conn) {
  let connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  const handleUserInput = function() {
    stdin.on('data', (data) =>  {
      if (data === '\u0003') {
        process.exit();
      }
      if (data === 'W' || data === 'w') {
        // console.log('up');
        connection.write("Move: up");
      }
      if (data === 'A' || data === 'a') {
        // console.log('left');
        connection.write("Move: left");
      }
      if (data === 'S' || data === 's') {
        // console.log('down');
        connection.write("Move: down");
      }
      if (data === 'D' || data === 'd') {
        // console.log('right');
        connection.write("Move: right");
      }
    });
  };
  handleUserInput();
  return stdin;
};

module.exports = { setupInput };