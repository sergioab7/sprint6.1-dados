import { Request, Response } from "express";
import GetPlayer from "../helpers/getPlayers";
import UpdatePlayerName from "../helpers/updatePlayerName";

export const getAllPlayer = async(req:Request, res:Response) => {
    try {
        const getAllPlayers = await GetPlayer.getAllPlayers();

        res.status(201).json({
            getAllPlayers
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'[-] Error 500 - Internal Server Error'
        })
    }
};

export const getOnePlayer = async(req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const player = await new GetPlayer(id);
        const getPlayer = await player.getOnePlayer();

        return res.status(201).json({
            getPlayer
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'[-] Error 500 - Internal Server Error'
        })
    }
};

export const updateName = async(req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const { firstName, lastName} = req.body;

        const updatePlayerName = await new UpdatePlayerName(id, firstName, lastName);

        res.status(201).json({
            msg:'[+] Player Updated',
            updatePlayerName
        })

    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg:'[-] Player doesnt exists'
        })
    }
};

export const deletePlayer = async(req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const player = await new GetPlayer(id);

        player.getAndDelete();
        res.status(201).json({
            msg:"[+] Player deleted",
            player
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg:'[-] Player doesnt exists'
        })
    }
};