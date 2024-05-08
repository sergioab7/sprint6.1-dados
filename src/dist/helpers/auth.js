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
const config_1 = __importDefault(require("../config"));
const Player_1 = require("../models/Player");
const jsonwebtoken_1 = require("jsonwebtoken");
class Auth {
    constructor(email, password, firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.email = email;
        this.password = password;
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield new Player_1.Player({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                date: this.date,
                password: yield Player_1.Player.encryptPassword(this.password)
            });
            const savePlayer = yield player.save();
            const jwt = (0, jsonwebtoken_1.sign)({ id: player.id }, config_1.default.jwtSecret, {
                expiresIn: '4h'
            });
            return jwt;
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const playerDB = yield Player_1.Player.findOne({ email: this.email });
            if (!playerDB) {
                return 'Wrong email';
            }
            const validatePassword = yield Player_1.Player.comparePassword(this.password, playerDB.password);
            if (!validatePassword) {
                return "Password incorrecta";
            }
            const jwt = (0, jsonwebtoken_1.sign)({ id: playerDB.id }, config_1.default.jwtSecret, {
                expiresIn: '4h'
            });
        });
    }
}
exports.default = Auth;
