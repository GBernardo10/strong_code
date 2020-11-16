import express from "express";
import { routes } from "./resources/user/create_user/endpoint";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log("Server running 🐳"));
