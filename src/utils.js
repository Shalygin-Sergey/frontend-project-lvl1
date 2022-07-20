export const getRandomNumber = (max, min) => {    
    return Math.floor(Math.random() * (max - min + 1) + min);    
};

export const isEvenNumber = number => number % 2 === 0;