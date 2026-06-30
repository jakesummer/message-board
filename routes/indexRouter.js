import { Router } from "express";
import { getAllMessages } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

export default indexRouter;
