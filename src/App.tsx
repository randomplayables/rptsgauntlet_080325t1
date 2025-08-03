import React from 'react'
import { useGuessNumberGame } from './hooks/useGuessNumberGame'
import GameSetup from './components/GameSetup'
import NumberPicker from './components/NumberPicker'
import NumberGuesser from './components/NumberGuesser'
import GuessHistory from './components/GuessHistory'
import GameResult from './components/GameResult'

const App: React.FC = () => {
  const {
    phase,
    players,
    history,
    secretNumber,
    setupGame,
    pickSecretNumber,
    makeGuess,
    resetGame,
  } = useGuessNumberGame()

  if (phase === 'setup') {
    return <GameSetup onStart={setupGame} />
  }

  if (phase === 'pick') {
    return <NumberPicker onPick={pickSecretNumber} />
  }

  if (phase === 'guess') {
    return (
      <>
        <NumberGuesser onGuess={makeGuess} />
        <GuessHistory history={history} />
      </>
    )
  }

  if (phase === 'result') {
    return (
      <GameResult
        players={players}
        secretNumber={secretNumber!}
        guessCount={history.length}
        onRestart={resetGame}
      />
    )
  }

  return null
}

export default App