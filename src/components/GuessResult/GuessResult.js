import React from 'react';
import Guess from '../Guess/Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResult({guessResultList}) {

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess 
          key={index}
          guess={guessResultList[index]}/>
      ))}
    </div>
  );
}

export default GuessResult;
