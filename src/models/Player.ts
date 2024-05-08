import { model, Schema } from "mongoose";
import { IPlayer } from "../interfaces/IPlayer";
import { IPlayerModel } from "../interfaces/IPlayerMethod";

import bcryptjs from "bcryptjs";

const PlayerSchema = new Schema({
    firstName:{
        type:String,
        required:[true, 'El primer nombre es requerido']
    },
    lastName:{
        type:String,
        required:[true, 'El apellido es requerido']
    },
    email:{
        type:String,
        required:[true, 'El email es requerido'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'La contraseña es requerida'],
    },
    date:String,
    totalGames:{
        type:Number,
        default:0
    },
    gamesWon:{
        type:Number,
        default:0
    },
    wonRate:{
        type:Number,
        default:0
    },
    playHistory:[Object]
}, {
    versionKey:false
});

PlayerSchema.static('encryptPassword', async(password:string) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
});

PlayerSchema.static('comparePassword', async(password:string, receivedPassword:string) => {
    return await bcryptjs.compare(password, receivedPassword);
})

export const Player = model<IPlayer, IPlayerModel>('Player', PlayerSchema);