import React from 'react'

interface GameResultProps {
  players: {
    challenger: string
    opponent: string
  }
  secretNumber: number
  guessCount: number
  onRestart: () => void
}

const GameResult: React.FC<GameResultProps> = ({
  players,
  secretNumber,
  guessCount,
  onRestart,
}) => {
  return (
    <div className="game-result">
      <h2>Game Over</h2>
      <p>Winner: {players.opponent}</p>
      <p>Loser: {players.challenger}</p>
      <p>
        The secret number was {secretNumber}. {players.opponent} guessed it in{' '}
        {guessCount} {guessCount === 1 ? 'try' : 'tries'}.
      </p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  )
}

export default GameResult
