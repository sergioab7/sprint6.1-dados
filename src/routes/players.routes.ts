import { Router } from "express";
import { deletePlayer, getAllPlayer, getOnePlayer, updateName } from "../controllers/players.controller";

const router = Router();


router.get('/get-all-players', getAllPlayer);
router.get('/get-player/:id', getOnePlayer);
router.put('/update-player/:id', updateName);
router.delete('/delete-player/:id', deletePlayer);

export default router;