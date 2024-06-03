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
exports.AuthAnon = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("../config"));
const Player_1 = require("../models/Player");
class AuthAnon {
    constructor(firstName, date, email) {
        this.lastName = "anon";
        this.firstName = firstName;
        this.date = date;
        this.email = email;
    }
    logAnon() {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield new Player_1.Player({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                date: this.date
            });
            const anonPlayerSaved = yield player.save();
            const jwt = (0, jsonwebtoken_1.sign)({ id: player.id }, config_1.default.jwtSecret, {
                expiresIn: '4h'
            });
            return jwt;
        });
    }
}
exports.AuthAnon = AuthAnon;
