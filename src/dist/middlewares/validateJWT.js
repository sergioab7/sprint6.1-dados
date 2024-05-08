"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const validateToken = (req, res, next) => {
    try {
        const accessToken = req.header('authorization') || req.query.accessToken;
        if (!accessToken) {
            res.status(400).json({
                msg: '[-] Acceso denegado, necesitas un token.'
            });
        }
        ;
        jsonwebtoken_1.default.verify(accessToken, config_1.default.jwtSecret);
    }
    catch (error) {
        res.status(400).json({
            msg: '[-] Acceso denegado, token expirado o incorrecto'
        });
    }
    ;
    next();
};
exports.validateToken = validateToken;
