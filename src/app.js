const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");
const routes = require("./routes/routes.js")

const app = express();
const port = 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes)

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
