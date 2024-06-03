import { Router } from "express";
import { deletePlayer, getAllPlayer, getOnePlayer, updateName } from "../controllers/players.controller";
import { validateToken } from "../middlewares/validateJWT";

const router = Router();

/*Listado de todos los jugadores*/
router.get('/players', validateToken, getAllPlayer);

/*Elimina al jugador*/
router.delete('/players/:id', validateToken, deletePlayer);

/* Modifica el nombre del jugador*/
router.put('/players/:id', validateToken, updateName);

/* Te muestra un jugador pero no está en las condiciones de ITAcademy*/
router.get('/player/:id', validateToken, getOnePlayer);


export default router;