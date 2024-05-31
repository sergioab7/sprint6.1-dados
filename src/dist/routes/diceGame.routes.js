"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diceGame_controller_1 = require("../controllers/diceGame.controller");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
/*Jugador especifico realiza una tirada*/
router.post("/games/:id", validateJWT_1.validateToken, diceGame_controller_1.playerRollDice);
/*Elimina las jugadas de un jugador */
router.delete("/games/:id", validateJWT_1.validateToken, diceGame_controller_1.deleteGames);
/* Zona Rankings */
router.get("/ranking", validateJWT_1.validateToken, diceGame_controller_1.generalRanking);
router.get("/ranking/winner", validateJWT_1.validateToken, diceGame_controller_1.getBetterPlayer);
router.get("/ranking/loser", validateJWT_1.validateToken, diceGame_controller_1.getWorstPlayer);
exports.default = router;
