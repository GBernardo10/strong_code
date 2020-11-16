const express = require("express");
const app = express();
const msg = "Server Running"
app.get("/", (req, res) =>
  res.json({
    msg
  })
);

app.listen(process.env.PORT || 3333, () => console.log(msg));
