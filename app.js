// An array of superHeros including there name and a hint to prompt the user.
const superHeros = [
  {
    name: "Wolverine",
    hint: "member of xmen and smokes cigars",
  },
  {
    name: "Spiderman",
    hint: "lover is mary jane parker",
  },
  {
    name: "Ironman",
    hint: "billionaire who owns a company with industries in the name",
  },
  {
    name: "CaptainAmerica",
    hint: "soldier from world war 2",
  },
  {
    name: "Deadpool",
    hint: "Classic Anti-Hero known for its recent R rated films",
  },
  {
    name: "ProfessorX",
    hint: "runs a school for mutants",
  },
  {
    name: "Antman",
    hint: "gets really really really small for his superpower",
  },
  {
    name: "BlackPanther",
    hint: "lives in wakanda",
  },
  {
    name: "Storm",
    hint: "controls the weather",
  },
  {
    name: "Starlord",
    hint: "chris pratt",
  },
  {
    name: "Thanos",
    hint: "all things must be balanced",
  },
  {
    name: "Punisher",
    hint: "on a quest for brutal vengance after his family is killed",
  },
  {
    name: "Hawkeye",
    hint: "Bow and arrow is this heros weapon of choice",
  },
  {
    name: "Groot",
    hint: "arborial super hero",
  },
  {
    name: "NickFury",
    hint: "leader of SHIELD",
  },
  {
    name: "IncredibleHulk",
    hint: "Don't wamt tp make this guy angry",
  },
  {
    name: "DoctorStrange",
    hint: "cape acts as a third set off hands",
  },
  {
    name: "Daredevil",
    hint: "blind but does not let that stop him",
  },
  {
    name: "Blackwidow",
    hint: "This female hero was orginally a villian",
  },
  {
    name: "BruceBanner",
    hint: "the calm version of something you dont want to get angry",
  },
];

/*varaibles i think i will need.
guessInput
guessButton
lettersGuessed
matchedLetters
superHint
heros
livesLeft

 */

//Randomly selecting a superhero to pull its name and hint and store it.
// starting the game
let game = null;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  game = {
    wrongGuesses: 0,
    matchedLetters: [], // storage for letters of the word this game
    guessLetters: [],
    randomHero: null,
    maxGuesses: 5,
    imageDisplayed: null,
  };

  game.randomHero = superHeros[getRandomIntInclusive(0, superHeros.length - 1)];
  console.log(game.randomHero);
  game.matchedLetters = Array(game.randomHero.name.length).fill("_");
  const parentElement = $("#letterDisplay");
  for (let index = 0; index < game.matchedLetters.length; index++) {
    const matchedLetter = game.matchedLetters[index];
    const letterElement = document.createElement("span");
    letterElement.innerHTML = matchedLetter;

    parentElement.append(letterElement);
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetArray = alphabet.split("");

  alphabetArray.forEach((letter) => {
    parentElement.append(
      `<button onClick="sumbitGuess("${letter}")">${letter}</button>`
    );
  });
}

function sumbitGuess(letter) {
  for (let index = 0; index < game.randomHero.length; index++) {
    const letterAtIndex = game.randomHero[index];
    if (letterAtindex === letter) {
      game.matchedLetters[index] = letter;
      for (let index = 0; index < game.matchedLetters.length; index++) {
        const matchedLetter = game.matchedLetters[index];
        const letterElement = document.createElement("span");
        letterElement.innerHTML = matchedLetter;

        parentElement.append(letterElement);
      }
    }
  }

  //  4. check to see if it matches the randomHero string.

  //  4.1 If it does match make it appear on screen in the letterDisplay
  //  5. If letter does not match the matchedLetter array
  //  5.1 Make image of a hero appear on screen
  //  5.2 Make wrongGuesses to go up.
}

// Display Length of word to the user

//  if Right Guesses less then the length of the word

// prompt the user to make another guess

// if the guess is correct display the letter on screen to the user

// if the guess is incorrect pop a image on scree.

// if the incorrect guesses is greater then or equal to 5 tell the user that they lost and to exit/restart

// If the correct guesses is equal to the length of the word. The user has won and promp them to exit/restart.
