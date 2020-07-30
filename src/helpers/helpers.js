const helpers = {

    getUniqueValue: (arr = []) => {
        const set = new Set();
        const uniqueArr = [];
        arr.forEach((item) => set.add(item.toLowerCase()));
        // eslint-disable-next-line no-restricted-syntax
        for (const item of set) {
            uniqueArr.push(item);
        }
        return uniqueArr;
    },

    randomNumber: (number) => {
        return Math.floor(Math.random() * number);
    },

    randomInteger: (min, max) => {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    },

    shuffle: (array) => array.sort(() => Math.random() - 0.5),
};

export default helpers;
