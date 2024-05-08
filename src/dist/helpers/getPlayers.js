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
const Player_1 = require("../models/Player");
class GetPlayer {
    constructor(id) {
        this.id = id;
    }
    static getAllPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            const players = yield Player_1.Player.find({});
            const response = players.map(player => {
                const obj = {
                    id: player._id,
                    firstName: player.firstName,
                    lastName: player.lastName,
                    wonRate: player.wonRate
                };
                return obj;
            });
            return response;
        });
    }
    getOnePlayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield Player_1.Player.findById({ _id: this.id });
            if (!(player === null || player === void 0 ? void 0 : player._id))
                return false;
            return {
                firstName: player === null || player === void 0 ? void 0 : player.firstName,
                lastName: player === null || player === void 0 ? void 0 : player.lastName,
                playHistory: player === null || player === void 0 ? void 0 : player.playHistory
            };
        });
    }
    ;
    getAndDelete() {
        return __awaiter(this, void 0, void 0, function* () {
            const deletePlayer = yield Player_1.Player.findByIdAndDelete({ _id: this.id });
            return deletePlayer;
        });
    }
}
exports.default = GetPlayer;
