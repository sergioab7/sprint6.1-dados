import { Request, Response } from "express";
import RollGame from "../helpers/diceGame";

export const playerRollDice = async(req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const game = await new RollGame(id);
        const playerRollDice = await game.PlayerRollDice();

        res.status(201).json({
            playerRollDice
        })
    } catch (error) {
        res.status(400).json({
            msg:'[-] ID not valid.'
        })
    }
};

export const generalRanking = async(req:Request, res:Response) => {
    try {
        const ranking = await RollGame.generalRanking();

        res.status(200).json({
            ranking
        });
        
    } catch (error) {
        res.status(500).json({
            msg:'[-] Error 500 - Internal Server Error.'
        })
    }
};

export const getBetterPlayer = async(req:Request, res:Response) => {
    try {
        const betterPlayer =  await RollGame.getBetterPlayer();

        res.status(201).json({
            betterPlayer
        })
    } catch (error) {
        res.status(500).json({
            msg:'[-] Error 500 - Internal Server Error.'
        })        
    }
};

export const getWorstPlayer = async(req:Request, res:Response) => {
    try {
        const worstPlayer =  await RollGame.getWorstPlayer();

        res.status(201).json({
            worstPlayer
        })
    } catch (error) {
        res.status(500).json({
            msg:'[-] Error 500 - Internal Server Error.'
        })        
    }
};

export const deleteGames = async(req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const player = await new RollGame(id);
        const deleteGames = await player.deleteGames();

        res.status(201).json({
            msg:'[+] Player games deleted',
            deleteGames
        })
    } catch (error) {
        res.status(400).json({
            msg:'[-] ID no valid.'
        })        
    }
};