///
/// \file   main.js
/// \brief  The entry point for our program.
///

// Imports
const Path          = require("path");
const Express       = require("express");
const BodyParser    = require("body-parser");

// Express
const App = Express();

// Body Parser
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));

// Static Files
App.use(Express.static(Path.join(__dirname, "public")));

// Routing
App.use("/", require("./routes/index"));

// Listening
const Port = process.env.PORT || 3000;
const Server = App.listen(Port, () => {
    console.log(`Listening on Port #${Port}...`);
});