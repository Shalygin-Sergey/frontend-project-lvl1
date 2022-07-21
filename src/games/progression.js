import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getNumProgress = () => {
    const step = getRandomNumber(2, 5);
    let progressionNum = getRandomNumber(0, 50)
    const progression = [];
  
    for (let i = 0; i < progressionLength; i++) {
        progression.push(progressionNum);
        progressionNum += step;
    }  
    return progression;
};

const getQuestionAndAnswer = () => {
        
    const progression = getNumProgress();
    const randomIndex = getRandomNumber(0, 9);

    const correctAnswer = String(progression[randomIndex]); 
    progression[randomIndex] = '..';
    
    const question = progression.join(' ');

    return [question, correctAnswer]
    
};

export default () => {
    runGame(description, getQuestionAndAnswer);
};