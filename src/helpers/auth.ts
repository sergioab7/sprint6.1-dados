import  config from "../config";
import { Player } from "../models/Player";
import { sign } from "jsonwebtoken";

class Auth{

    private firstName: string | undefined;
    private lastName: string | undefined;
    private email: string;
    private date: Date | undefined;
    private password: string;

    constructor(email:string, password:string, firstName?:string, lastName?:string, date?:Date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.email = email;
        this.password = password;
    }

    async register(){
        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date:this.date,
            password: await Player.encryptPassword(this.password)
        });

        const savePlayer = await player.save();
        const jwt = sign({id:player.id}, config.jwtSecret as string, {
            expiresIn:'4h'
        });

        return jwt;
    }

    async login(){
        const playerDB = await Player.findOne({email:this.email});

        if(!playerDB){
            return '[-] Email no existe';
        }

        const validatePassword = await Player.comparePassword(this.password, playerDB.password);
        if(!validatePassword){
            return "[-] Password incorrecta"
        }

        const jwt = sign({id:playerDB.id}, config.jwtSecret as string, {
            expiresIn:'4h'
        })
    }


}


export default Auth;