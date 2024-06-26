import { Router } from "express";
import { anonymous, login, register } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/validateJWT";

const router = Router();

/*Register*/
router.post("/register", register);
router.post("/login", login);

//Forma anonima 
router.post("/anonymous", anonymous);


export default router;