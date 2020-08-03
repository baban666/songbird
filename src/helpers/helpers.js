import error from '../placeholders/error.mp3';
import correct from '../placeholders/correct.mp3';

const helpers = {

    randomNumber: (number) => {
        return Math.floor(Math.random() * number);
    },

    randomInteger: (min, max) => {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    },

    getStars: (num, symbol) => {
        return new Array(num).fill(symbol).join('')
    },

    playError: () => {
        const audioObj = new Audio(error);
        audioObj.play()
    },

    playCorrect: () => {
        const audioObj = new Audio(correct);
        audioObj.play()
    },

};

export default helpers;
