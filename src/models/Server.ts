import express, { Application } from "express";
import config from "../config";
import cors from "cors";

import { connectDB } from "../db/config";

//Rutas
import routerGames from "../routes/diceGame.routes";
import routerAuth from "../routes/auth.routes";
import routerPlayers from "../routes/players.routes";
import routerError404 from "../routes/error404.routes";

class Server {
    
    private app: Application;
    private port: string;
    private path = {
        error404:'*',
        games:'/games',
        auth:'/auth',
        players:'/players',
        absolute:"/"
    }

    constructor(){
        this.app = express();
        this.port = config.port as string;

        this.middlewares();
        this.dbConnect();
        this.routes();

    }

    dbConnect(){
         connectDB();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.path.absolute, routerGames);
        this.app.use(this.path.absolute, routerAuth);
        this.app.use(this.path.absolute, routerPlayers);
        this.app.use(this.path.absolute, routerError404);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Puerto en escucha: " + this.port);
        });
    }
}

export default Server;