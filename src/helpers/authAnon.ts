import { sign } from "jsonwebtoken";
import config from "../config";
import { Player } from "../models/Player";

export class AuthAnon{
    private firstName: string | undefined;
    private lastName: string | undefined = "anon";
    private email: string;
    private date: Date;

    constructor(firstName:string, date:Date, email:string){
        this.firstName = firstName;
        this.date = date;
        this.email = email;
    }

    async logAnon(){
        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date:this.date
        });

        const anonPlayerSaved = await player.save();
        const jwt = sign({id:player.id}, config.jwtSecret as string, {
            expiresIn:'4h'
        });

        return jwt;
    }

}