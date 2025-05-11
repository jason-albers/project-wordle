import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ words, answer }) {
  const allGuesses = [...words];
  for (let i = allGuesses.length; i < NUM_OF_GUESSES_ALLOWED; i++) {
    allGuesses.push('');
  }

  return (
    <div className="guess-results">
      {allGuesses.map((word) => (
        <Guess
          word={word}
          key={crypto.randomUUID()}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default Guesses;
