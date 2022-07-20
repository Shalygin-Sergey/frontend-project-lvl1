import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperationSymbol = (symbols) => {
    const randomIndex = getRandomNumber(0, symbols.length);
    const randomSymbol = symbols[randomIndex];
    return randomSymbol;
}

const isArithmeticOperations = (symbol, firstValue, secondValue) => {
    switch(symbol) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '*':
            return firstValue * secondValue;
        default:
            return null;
    }
};

const getQuestionAndAnswer = () => {
    const randomSymbol = getRandomOperationSymbol(operationSymbols);
    const firstNumber = getRandomNumber(0, 50);
    const secondNumber = getRandomNumber(0, 50);

    const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
    const correctAnswer = String(isArithmeticOperations(randomSymbol, firstNumber, secondNumber));

    return [question, correctAnswer];
};

export default () => {
    runGame(description, getQuestionAndAnswer);
};