import React from 'react';
import { range } from '../../utils';

function Guess({guess}) {

  const getCellClass = (index) => {
    if (!guess) return '';

    if (guess[index]) {
      return guess[index].status;
    }

    return '';
  }

  return (
    <p className='guess'>
      {range(0, 5).map(index => (
        <span key={index} className={`cell ${getCellClass(index)}`}>
          { guess ? guess[index].letter : '' }
        </span>
      ))}
    </p>
  );
}

export default Guess;
