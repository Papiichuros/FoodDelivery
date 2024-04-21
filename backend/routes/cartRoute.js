import express from "express"
import { addToCart,removeFromCart, getCart } from "../controllers/cartController.js"
import authMiddlware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddlware, addToCart)
cartRouter.post("/remove", authMiddlware, removeFromCart)
cartRouter.post("/get", authMiddlware, getCart)

export default cartRouter;