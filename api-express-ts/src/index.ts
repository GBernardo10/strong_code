import express from "express";
import { router } from "./resources/user/create_user/endpoint";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3333, () => console.log("Server running 🐳"));
