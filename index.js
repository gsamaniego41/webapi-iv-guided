require("dotenv").config();
const server = require("./api/server.js");

// step 1: make the port dynamic
const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;
// node apps run on process
// process has an obj called env
// most services will add a variable to .env

// step 2: create .env
// PORT=5000

// gotcha: need to restart server

// step 3: yarn add dotenv
// express doesn't know how to read .env

// step 4: require dotenv as early as possible

server.listen(port, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
