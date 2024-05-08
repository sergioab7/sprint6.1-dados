import { connect } from "mongoose";
import config from "../config";

export const connectDB = async() => {
    try{
        await connect(config.mongodb as string);
        console.log('BBDD ha sido conectada');
        
    }catch(error){
        console.log("Fallo en la conexión de BBDD.");
    }
}