import { Router } from "express";
import { playerRollDice, generalRanking, getBetterPlayer, getWorstPlayer, deleteGames } from "../controllers/diceGame.controller";
import { validateToken } from "../middlewares/validateJWT";

const router = Router();

/*Jugador especifico realiza una tirada*/
router.post("/games/:id", validateToken, playerRollDice);

/*Elimina las jugadas de un jugador */
router.delete("/games/:id", validateToken, deleteGames);


/* Zona Rankings */
router.get("/ranking", validateToken, generalRanking);
router.get("/ranking/winner", validateToken, getBetterPlayer);
router.get("/ranking/loser", validateToken, getWorstPlayer);


export default router;