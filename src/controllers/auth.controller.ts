import { Request, Response } from "express";
import Auth from "../helpers/auth";

export const register = async(req:Request, res:Response) => {
    try {
        
        const { firstName, lastName, email, password} = req.body;
        const date = new Date();
        const player = new Auth(email, password, firstName, lastName, date);

        const register = await player.register();
        return res.status(201).json({
            firstName,
            lastName,
            email,
            date,
            jwt:register
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'[-] Error 500 - Internal Server Error',
        })
    }
};

export const login = async(req:Request, res:Response) => {
    try {
        
    } catch (error) {
        
    }
};