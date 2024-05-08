"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGames = exports.getWorstPlayer = exports.getBetterPlayer = exports.generalRanking = exports.playerRollDice = void 0;
const diceGame_1 = __importDefault(require("../helpers/diceGame"));
const playerRollDice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const game = yield new diceGame_1.default(id);
        const playerRollDice = yield game.PlayerRollDice();
        res.status(201).json({
            playerRollDice
        });
    }
    catch (error) {
        res.status(400).json({
            msg: '[-] ID not valid.'
        });
    }
});
exports.playerRollDice = playerRollDice;
const generalRanking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ranking = yield diceGame_1.default.generalRanking();
        res.status(200).json({
            ranking
        });
    }
    catch (error) {
        res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error.'
        });
    }
});
exports.generalRanking = generalRanking;
const getBetterPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const betterPlayer = yield diceGame_1.default.getBetterPlayer();
        res.status(201).json({
            betterPlayer
        });
    }
    catch (error) {
        res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error.'
        });
    }
});
exports.getBetterPlayer = getBetterPlayer;
const getWorstPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worstPlayer = yield diceGame_1.default.getWorstPlayer();
        res.status(201).json({
            worstPlayer
        });
    }
    catch (error) {
        res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error.'
        });
    }
});
exports.getWorstPlayer = getWorstPlayer;
const deleteGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const player = yield new diceGame_1.default(id);
        const deleteGames = yield player.deleteGames();
        res.status(201).json({
            msg: '[+] Player games deleted',
            deleteGames
        });
    }
    catch (error) {
        res.status(400).json({
            msg: '[-] ID no valid.'
        });
    }
});
exports.deleteGames = deleteGames;
