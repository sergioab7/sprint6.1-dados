import { Router } from "express";
import { deletePlayer, getAllPlayer, getOnePlayer, updateName } from "../controllers/players.controller";
import { validateToken } from "../middlewares/validateJWT";

const router = Router();


router.get('/get-all-players', validateToken, getAllPlayer);
router.get('/get-player/:id', validateToken, getOnePlayer);
router.put('/update-player/:id', validateToken, updateName);
router.delete('/delete-player/:id', validateToken, deletePlayer);

export default router;