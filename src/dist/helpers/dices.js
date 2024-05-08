"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollDices = void 0;
const rollDices = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const veredict = dice1 + dice2 === 7 ? 'win' : 'lose';
    return {
        dice1,
        dice2,
        rollScore: dice1 + dice2,
        veredict
    };
};
exports.rollDices = rollDices;
