const express = require("express");
const app = express();
const msg = "SERVIDOR SUCESSOOOOOO!";

const path = require("path")

app.use('/', express.static(path.resolve(__dirname,"..","public")));

app.get("/api", (req, res) =>
  res.json({
    msg,
  })
);

app.listen(process.env.PORT || 3333, () => console.log(msg));
