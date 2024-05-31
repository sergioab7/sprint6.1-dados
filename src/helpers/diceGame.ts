import { rollDices } from "./dices";
import { Player } from "../models/Player";
import { IPlayer } from "../interfaces/IPlayer";


class RollGame {

    private id:string;

    constructor(id:string){
        this.id=id;
    };

    async PlayerRollDice(){
        const game = rollDices();

        const player = await Player.findById({_id:this.id}) as IPlayer;
        player.totalGames++;

        if(game.veredict == "win"){
            player.gamesWon++;
        }

        player.playHistory.push(game);

        player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed(2));

        await player.save();

        return {
            id:player._id,
            firstName:player.firstName,
            lastName:player.lastName,
            email:player.email,
            totalGames:player.totalGames,
            gamesWon:player.gamesWon,
            wonRate:player.wonRate,
            playHistory:player.playHistory
        }
    };

    static async generalRanking(){
        const players = await Player.find({}).sort({ wonRate: -1 }).select('-password');

        return players;
    }

    static async getBetterPlayer(){
        const players = await Player.find({});
        let max = 0;
        players.forEach(player => {
            player.wonRate > max ? max = player.wonRate : null
        })
        const betterPlayer = await Player.findOne({wonRate:max}).select('-password');

        return betterPlayer;
    }

    static async getWorstPlayer(){
        const players = await Player.find({});
        let min = 100;
        players.forEach(player => {
            player.wonRate < min ? min = player.wonRate : null
        });

        const worstPlayer = await Player.findOne({wonRate:min}).select('-password');

        return worstPlayer;
    }

    async deleteGames(){
        const player = await Player.findById({_id:this.id}) as IPlayer;

        player.totalGames = 0;
        player.gamesWon = 0;
        player.wonRate = 0;
        player.playHistory = [];

        await player.save();

        return {
            id:player._id,
            firstName:player.firstName,
            lastName:player.lastName,
            email:player.email,
            totalGames:player.totalGames,
            gamesWon:player.gamesWon,
            wonRate:player.wonRate,
            playHistory:player.playHistory
        }
    }
}

export default RollGame;