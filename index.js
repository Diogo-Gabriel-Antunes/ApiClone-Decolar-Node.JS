const express = require("express");
const routes = require("./routes");
const bodyparser = require("body-parser");
const cors = require("cors");
require("./api/redis/manipula-blacklist.js");
require("./api/redis/allowlist-refresh-token");
const app = express();
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  app.use(cors());

  next();
});
app.use(routes);

app.listen(8080, () => console.log("Tudo rodando certinho"));
