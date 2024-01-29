import React, { useState } from 'react';

function GuessForm({onGuessFormSubmit, isAttemptEnd}) {

  const [guessValue, setGuessValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onGuessFormSubmit(guessValue.toUpperCase());
    setGuessValue('');
  }

  const handleInputChange = (e) => {
    setGuessValue(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        value={guessValue} 
        disabled={isAttemptEnd} 
        onChange={handleInputChange} 
        id="guess-input" 
        type="text" />
    </form>
  );
}

export default GuessForm;
