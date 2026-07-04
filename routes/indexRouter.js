import { Router } from "express";
import {
  getAllMessages,
  createNewMessage,
  heartMessage,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.post("/", createNewMessage);
indexRouter.post("/messages/:id/like", heartMessage);

export default indexRouter;
