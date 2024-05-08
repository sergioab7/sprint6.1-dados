import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export const validateToken = (req:Request, res:Response, next:NextFunction) => {
    try {
        const accessToken:any = req.header('authorization') || req.query.accessToken;
        if(!accessToken){
            res.status(400).json({
                msg:'[-] Acceso denegado, necesitas un token.'
            });
        };

        jwt.verify(accessToken, config.jwtSecret as string);

    } catch (error) {
        res.status(400).json({
            msg:'[-] Acceso denegado, token expirado o incorrecto'
        })
    };

    next();
}

