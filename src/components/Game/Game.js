import React from 'react';
import Guesses from '../Guesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [wordsList, setWordsList] = React.useState([]);
  let gameStatus = '';
  let isDisabled = false;

  function HandleInput({ event }) {
    const nextWord = guess.toUpperCase();
    if (wordsList.length < NUM_OF_GUESSES_ALLOWED) {
      setWordsList([...wordsList, nextWord]);
      setGuess('');
    }
  }
  if (wordsList[wordsList.length - 1] === answer) {
    gameStatus = 'win';
    isDisabled = true;
  } else if (wordsList.length === NUM_OF_GUESSES_ALLOWED) {
    gameStatus = 'lose';
    isDisabled = true;
  }

  return (
    <>
      <Guesses words={wordsList} answer={answer} />
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          HandleInput(event);
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        {isDisabled ? (
          <input id="guess-input" value={guess} disabled />
        ) : (
          <input
            id="guess-input"
            type="text"
            value={guess}
            pattern="[A-Za-z]{5}"
            maxLength="5"
            onChange={(event) =>
              setGuess(event.target.value.toUpperCase())
            }
          />
        )}
      </form>
      {gameStatus === 'win' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {wordsList.length} guesses</strong>.
          </p>
        </div>
      )}

      {gameStatus === 'lose' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
