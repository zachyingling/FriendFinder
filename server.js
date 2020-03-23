const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const htmlRoutes = require("./app/routing/htmlRoutes")(app, path);
const apiRoutes = require("./app/routing/apiRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
