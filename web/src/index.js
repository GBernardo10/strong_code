const express = require("express");
const app = express();

app.get("/", (req, res) =>
  res.json({
    msg: "OK",
  })
);

app.listen(process.env.PORT || 3333, () => console.log("Server Running"));
