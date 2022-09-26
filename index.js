const chalk = require('chalk');
let readlineSync = require('readline-sync');


var userName = readlineSync.question("What is your name? ");
console.log(chalk.magenta("Hey " + userName + "!"));
console.log("Let's see how well you know me");
var score = 0;

var quest = [
  qOne = {
    question: "1. How tall is Bernadette? \n a) 4ft 9 \n b) 4ft 10 \n c) 4ft 8 \n",
    answer: "b"
  },
  qTwo = {
    question: "2. What nickname do the other astronauts call Howard? \n a) Space man \n b) Rocket man \n c) Fruit Loops \n ",
    answer: "c"
  },
  qThree = {
    question: "3. What Video Game does Penny Get Addicted To? \n a) Call of Duty \n b) Age of Conan \n c) World of Warcraft \n ",
    answer: "b"
  },
  qFour = {
    question: "4. How does Penny 'ruin' Sheldon's spot? \n a) She split red wine on the cushion \n b) She covered it in nail varnish \n c) A paintball gun \n",
    answer: "c"
  },
  qFive = {
    question: "5. What is Sheldon Cooper's middle name? \n a) Lee \n b) Malcolm \n c) He doesn't have one \n",
    answer: "a"
  },
  qSix = {
    question: "6. What is the name of Raj's dog? \n a) Cookie \n b) Cinnamon \n c) Cupcake \n",
    answer: "b"
  },
  qSeven = {
    question: "7. How many cats does Sheldon buy when he breaks up with Amy? \n a) 25 \n b) 15 \n c) 10 \n",
    answer: "a"
  },
  qEight = {
    question: "8. How much money do Raj and Howard spend on action figures of themselves? \n a) $500 \n b) $350 \n c) $1,000 \n",
    answer: "c"
  },
  qNine = {
    question: "9. What is Sheldon Cooper’s IQ? \n a) 187 \n b) 185 \n c) 183 \n",
    answer: "a"
  },
  qten = {
    question: "10. What is Howard allergic to? \n a) Nuts \n b) milk \n c) fish \n",
    answer: "a"
  },
]

for (var i = 0; i < quest.length; i++) {
  game(quest[i].question, quest[i].answer);
  console.log("\n");
}


function game(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.green("You are correct!"));
    score = score + 1;
    console.log(chalk.bold.yellowBright("Your score is " + score));
  }
  else {
    console.log(chalk.redBright("You are wrong!"));
    console.log(chalk.bold.yellowBright("Your score is " + score));
  }
}

console.log(chalk.bgBlue("\nYour final score is " + score));

if (score > 6)
  console.log(chalk.greenBright("\n Congratulations! You're a big fan"));
else
  console.log(chalk.green("\n Go watch BBT again "));