import React, { useEffect, useState } from 'react';

import GuessForm from '../GuessForm';
import GuessResult from '../GuessResult';
import SadBanner from '../SadBanner';
import HappyBanner from '../HappyBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess, checkGuessIsCorrect } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  console.log( answer);
  const [guessResult, setGuessResult] = useState([]);
  const [gameIsWin, setGameIsWin] = useState(false);
  
  
  const onGuessFormSubmit = (guessItem) => {  
    const guessItemIsValid = validateUserInput(guessItem);
    const guessCheckResult = checkGuess(guessItem, answer);
    const guessItemIsCorrect = checkGuessIsCorrect(guessCheckResult);

    if (!guessItemIsValid) return;

    if (guessResult.length < NUM_OF_GUESSES_ALLOWED) {
      const updatedGuessResult = structuredClone(guessResult);

      updatedGuessResult.push(guessCheckResult);
      setGuessResult(updatedGuessResult);

      if (guessItemIsCorrect) {
        console.log('win');
        setGameIsWin(true);
      }
    }
  }

  const validateUserInput = (input) => {
    const regex = /^[a-zA-Z]+$/;

    if (!regex.test(input)) {
      alert('Please use only characters');
      return false;
    }

    if (input.length !== 5) {
      alert('Please input word with 5 characters length');
      return;
    }

    return true;
  }

  return <>
      {gameIsWin && <HappyBanner attempts={guessResult.length}/>}
      {(!gameIsWin && guessResult.length === NUM_OF_GUESSES_ALLOWED) && <SadBanner answer={answer}/>}
      <GuessResult answer={answer} guessResultList={guessResult}/>
      <GuessForm isAttemptEnd={gameIsWin || guessResult.length === NUM_OF_GUESSES_ALLOWED} onGuessFormSubmit={onGuessFormSubmit}/>
    </>;
}

export default Game;
