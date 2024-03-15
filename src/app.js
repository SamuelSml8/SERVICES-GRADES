const express = require("express");
const connectDB = require("./config/db.js");

const app = express();
const port = 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
