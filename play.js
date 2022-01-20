const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");


setupInput(connect());

// const connect = require("./client");
// const setupInput = require("./input");

// console.log("Connecting ...");

// // newConn(connect());
