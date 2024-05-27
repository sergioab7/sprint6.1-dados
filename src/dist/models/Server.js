"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const cors_1 = __importDefault(require("cors"));
const config_2 = require("../db/config");
//Rutas
const diceGame_routes_1 = __importDefault(require("../routes/diceGame.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const players_routes_1 = __importDefault(require("../routes/players.routes"));
const error404_routes_1 = __importDefault(require("../routes/error404.routes"));
class Server {
    constructor() {
        this.path = {
            error404: '*',
            games: '/games',
            auth: '/auth',
            players: '/players',
            absolute: "/"
        };
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
        this.middlewares();
        this.dbConnect();
        this.routes();
    }
    dbConnect() {
        (0, config_2.connectDB)();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.path.absolute, diceGame_routes_1.default);
        this.app.use(this.path.absolute, auth_routes_1.default);
        this.app.use(this.path.absolute, players_routes_1.default);
        this.app.use(this.path.absolute, error404_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Puerto en escucha: " + this.port);
        });
    }
}
exports.default = Server;
