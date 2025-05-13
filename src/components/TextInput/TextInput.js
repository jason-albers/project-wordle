import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function TextInput({
  guess,
  setGuess,
  wordsList,
  setWordsList,
  isDisabled,
}) {
  function HandleInput({ event }) {
    const nextWord = guess.toUpperCase();
    if (wordsList.length < NUM_OF_GUESSES_ALLOWED) {
      setWordsList([...wordsList, nextWord]);
      setGuess('');
    }
  }

  return (
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
  );
}

export default TextInput;
