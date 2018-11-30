require("dotenv").config();
const massive = require("massive");
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log(` Massive-DB is connected... `);
  })
  .catch(err => console.log(` Massive is NOT connected `));

//End points-----------------------------
app.post("/api/user/register", controller.addUser);
app.post("/api/user/login", controller.loginUser);

const port = 4000;
app.listen(port, () => console.log(` Listening on port ${port} `));
