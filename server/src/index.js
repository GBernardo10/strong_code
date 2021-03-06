const express = require("express");
const cors = require("cors");

// const path = require("path");
// const { getDado } = require("./service/get-data");

const app = express();
const msg = "API RODANDO !";

app.use(cors());
// app.use("/", express.static(path.resolve(__dirname, "..", "public")));

app.get("/api", (_, res) =>
  res.json({
    data: msg,
  })
);

app.listen(process.env.PORT || 3333, () => console.log(msg));
