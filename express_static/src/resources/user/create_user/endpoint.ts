import { Router } from "express";
import createUser from "./index";
import { User } from "./template";

const router = Router();

router.post("/", async (req, res) => {
  const user: User = await createUser(req.body);
  res.json(user);
});

export { router };
