const express = require("express");
const app = express();
const msg = "Running !";

app.use(express.static("public"));

app.get("/api", (req, res) =>
  res.json({
    msg,
  })
);

app.listen(process.env.PORT || 3333, () => console.log(msg));
