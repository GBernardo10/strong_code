import { Router } from "express";
import createUser from "./index";
import { User } from "./template";

const routes = Router();

routes.post("/", async (req, res) => {
  const user: User = await createUser(req.body);
  res.json(user);
});

routes.get("/", async (req, res) => {
  res.json({
    msg: "Works",
  });
});

export { routes };
