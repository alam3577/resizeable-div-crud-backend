const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8000 || process.env.PORT;
const app = express();
const contentRoute = require("./routes/content");

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Connection
require("./connection/connection");

// routes
app.use("/api", contentRoute);
// assign port
app.listen(PORT, () => {
  console.log("Server is running to the port", PORT);
});
