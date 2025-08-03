import React, { useState, FormEvent } from 'react'

interface GameSetupProps {
  onStart: (challenger: string, opponent: string) => void
}

const GameSetup: React.FC<GameSetupProps> = ({ onStart }) => {
  const [challenger, setChallenger] = useState('')
  const [opponent, setOpponent] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const c = challenger.trim()
    const o = opponent.trim()
    if (c && o) {
      onStart(c, o)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="game-setup">
      <h2>Setup Game</h2>
      <div>
        <label htmlFor="challenger-input">Challenger Name:</label>
        <input
          id="challenger-input"
          type="text"
          value={challenger}
          onChange={e => setChallenger(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="opponent-input">Opponent Name:</label>
        <input
          id="opponent-input"
          type="text"
          value={opponent}
          onChange={e => setOpponent(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!challenger.trim() || !opponent.trim()}>
        Start Game
      </button>
    </form>
  )
}

export default GameSetup