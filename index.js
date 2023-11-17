var path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require ('express-handlebars');
const route = require("./routes/index.js");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
//route:

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//get public
app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("combined"));
//Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "resources/views"));

//Route
route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
