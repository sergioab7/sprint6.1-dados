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
exports.login = exports.register = void 0;
const auth_1 = __importDefault(require("../helpers/auth"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        const date = new Date();
        const player = new auth_1.default(email, password, firstName, lastName, date);
        const register = yield player.register();
        return res.status(201).json({
            firstName,
            lastName,
            email,
            date,
            jwt: register
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error',
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const player = new auth_1.default(email, password);
        const login = yield player.login();
        if (login === 'Wrong email') {
            return res.status(400).json({
                msg: '[-] Email es incorrecto.'
            });
        }
        if (login === 'Password incorrecta') {
            return res.status(400).json({
                msg: '[-] Password es incorrecto.'
            });
        }
        res.status(201).json({
            msg: '[+] Autenticación correcta.',
            jwt: login
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: '[-] Error 500 - Internal Server Error',
        });
    }
});
exports.login = login;
