import dotenv from "dotenv";

const envFound = dotenv.config();

if(envFound.error){
    throw new Error("No se puede encontrar el archivo env");
}


export default{
    port:process.env.PORT || 3000,
    mongodb:process.env.MONGODB_URI,
    jwtSecret:process.env.JWT_PASSWORD
}