import readlineSync from 'readline-sync';

const greetingPlayer = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

const getRandomNumber = (max) => {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
};

const showMessage = (name, playerAnswer, correctAnswer) => {
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      process.exit();
    }
};  

const countRounds = 3;

const isEvenNumber = (number) => {
    if (number % 2 === 1) {
      return 'no';
    }
    return 'yes';
};

const name = greetingPlayer();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const runScript = () => {
    for (let i = 0; i < countRounds; i++) {

        const randomNumber = getRandomNumber(100);
        console.log(`Question: ${randomNumber}`);

        const playerAnswer = readlineSync.question('You answer: ');

        const correctAnswer = isEvenNumber(randomNumber);

        showMessage(name, playerAnswer, correctAnswer);
    }
    console.log(`Congratulations, ${name}`);
};

runScript();