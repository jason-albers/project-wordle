import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  const checkedGuess = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={
            checkedGuess ? `cell ` + checkedGuess[num].status : 'cell'
          }
          key={crypto.randomUUID()}
        >
          {checkedGuess ? checkedGuess[num].letter : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
