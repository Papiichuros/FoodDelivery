import express from "express"
import authMiddlware from "../middleware/auth.js";
import { listOrder, placeOrder, updateStatus, userOrders, verifyOrder,  } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddlware, placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddlware, userOrders);
orderRouter.get('/list', listOrder)
orderRouter.post("/status", updateStatus)


export default orderRouter;