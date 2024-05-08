"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("No se puede encontrar el archivo env");
}
exports.default = {
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_PASSWORD
};
