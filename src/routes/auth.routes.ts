import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/validateJWT";

const router = Router();

router.post("/register", register);


export default router;