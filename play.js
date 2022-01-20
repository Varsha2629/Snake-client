const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

// newConn(connect());
const connection = connect()
setupInput(connection);