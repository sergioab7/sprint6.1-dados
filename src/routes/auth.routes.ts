import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/validateJWT";

const router = Router();

/*Register*/
router.post("/register", register);
router.post("/login", login);


export default router;