const stdin = process.stdin;
let globalConnection;   // stor the tcp connection

const setInput = (conn) => {
  globalConnection = conn;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');

  return stdin;
}

  const handleUserInput = function (data) {
    // your code here
    
    stdin.on('data', (key) => {

      process.stdout.write('.');
      if (key === 'w') {
        globalConnection.write('Move: up');
      }
      if (key === 's') {
        globalConnection.write('Move: down');
      }
      if (key === 'a') {
        globalConnection.write('Move: left');
      }
      if (key === 'r') {
        globalConnection.write('Move: right');
      }

    });

    
  };

  stdin.on("data", handleUserInput);

module.exports = setInput;