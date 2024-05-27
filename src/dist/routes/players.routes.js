"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controller_1 = require("../controllers/players.controller");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
/*Listado de todos los jugadores*/
router.get('/players', validateJWT_1.validateToken, players_controller_1.getAllPlayer);
/*Elimina las tiradas del jugador*/
router.delete('/players/:id', validateJWT_1.validateToken, players_controller_1.deletePlayer);
/* Modifica el nombre del jugador*/
router.put('/players/:id', validateJWT_1.validateToken, players_controller_1.updateName);
/* Te muestra un jugador pero no está en las condiciones de ITAcademy*/
router.get('/player/:id', validateJWT_1.validateToken, players_controller_1.getOnePlayer);
exports.default = router;
