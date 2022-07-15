import readlineSync from 'readline-sync';

const greetPlayer = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    return playerName;
};

const getRandomNumber = (maxRange) => {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * maxRange);
    return randomNumber;
};

const showMessage = (playerName, playerAnswer, correctAnswer) => {
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}`);
      process.exit();
    }
};  

const countRounds = 3;

const isEvenNumber = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
};

const playerName = greetPlayer();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const runScript = () => {
    for (let i = 0; i < countRounds; i++) {

        const randomNumber = getRandomNumber(100);
        console.log(`Question: ${randomNumber}`);

        const playerAnswer = readlineSync.question('You answer: ');

        const correctAnswer = isEvenNumber(randomNumber);

        showMessage(playerName, playerAnswer, correctAnswer);
    }
    console.log(`Congratulations, ${playerName}`);
};

runScript();