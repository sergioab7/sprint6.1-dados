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
exports.deletePlayer = exports.updateName = exports.getOnePlayer = exports.getAllPlayer = void 0;
const getPlayers_1 = __importDefault(require("../helpers/getPlayers"));
const updatePlayerName_1 = __importDefault(require("../helpers/updatePlayerName"));
const getAllPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllPlayers = yield getPlayers_1.default.getAllPlayers();
        res.status(201).json({
            getAllPlayers
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error'
        });
    }
});
exports.getAllPlayer = getAllPlayer;
const getOnePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const player = yield new getPlayers_1.default(id);
        const getPlayer = yield player.getOnePlayer();
        return res.status(201).json({
            getPlayer
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error'
        });
    }
});
exports.getOnePlayer = getOnePlayer;
const updateName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { firstName, lastName } = req.body;
        const updatePlayerName = yield new updatePlayerName_1.default(id, firstName, lastName);
        yield updatePlayerName.updateName();
        res.status(201).json({
            msg: '[+] Player Updated',
            updatePlayerName,
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            msg: '[-] Player doesnt exists'
        });
    }
});
exports.updateName = updateName;
const deletePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const player = yield new getPlayers_1.default(id);
        player.getAndDelete();
        res.status(201).json({
            msg: "[+] Player deleted",
            player
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            msg: '[-] Player doesnt exists'
        });
    }
});
exports.deletePlayer = deletePlayer;
