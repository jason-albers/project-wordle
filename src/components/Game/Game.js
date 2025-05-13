import React from 'react';
import Guesses from '../Guesses';
import TextInput from '../TextInput';
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
      <TextInput
        guess={guess}
        setGuess={setGuess}
        wordsList={wordsList}
        setWordsList={setWordsList}
        isDisabled={isDisabled}
      />
      {gameStatus === 'win' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {' '}
              {wordsList.length === 1
                ? '1 guess'
                : `${wordsList.length} guesses`}
            </strong>
            .
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
