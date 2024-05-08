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
Object.defineProperty(exports, "__esModule", { value: true });
const dices_1 = require("./dices");
const Player_1 = require("../models/Player");
class RollGame {
    constructor(id) {
        this.id = id;
    }
    ;
    PlayerRollDice() {
        return __awaiter(this, void 0, void 0, function* () {
            const game = (0, dices_1.rollDices)();
            const player = yield Player_1.Player.findById({ _id: this.id });
            player.totalGames++;
            if (game.veredict == "win") {
                player.gamesWon++;
            }
            player.playHistory.push(game);
            player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed(2));
            yield player.save();
            return {
                id: player._id,
                firstName: player.firstName,
                lastName: player.lastName,
                email: player.email,
                totalGames: player.totalGames,
                gamesWon: player.gamesWon,
                wonRate: player.wonRate,
                playHistory: player.playHistory
            };
        });
    }
    ;
    static generalRanking() {
        return __awaiter(this, void 0, void 0, function* () {
            const players = yield Player_1.Player.find({}).sort({ wonRate: -1 });
            return players;
        });
    }
    static getBetterPlayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const players = yield Player_1.Player.find({});
            let max = 0;
            players.forEach(player => {
                player.wonRate > max ? max = player.wonRate : null;
            });
            const betterPlayer = yield Player_1.Player.findOne({ wonRate: max });
            return betterPlayer;
        });
    }
    static getWorstPlayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const players = yield Player_1.Player.find({});
            let min = 100;
            players.forEach(player => {
                player.wonRate < min ? min = player.wonRate : null;
            });
            const worstPlayer = yield Player_1.Player.findOne({ wonRate: min });
            return worstPlayer;
        });
    }
    deleteGames() {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield Player_1.Player.findById({ _id: this.id });
            player.totalGames = 0;
            player.gamesWon = 0;
            player.wonRate = 0;
            player.playHistory = [];
            yield player.save();
            return {
                id: player._id,
                firstName: player.firstName,
                lastName: player.lastName,
                email: player.email,
                totalGames: player.totalGames,
                gamesWon: player.gamesWon,
                wonRate: player.wonRate,
                playHistory: player.playHistory
            };
        });
    }
}
exports.default = RollGame;
