import { Router } from "express";
import {
  getAllMessages,
  createNewMessage,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.post("/", createNewMessage);

export default indexRouter;
