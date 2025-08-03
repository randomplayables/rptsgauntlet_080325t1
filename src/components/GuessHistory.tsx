import React from 'react'

interface HistoryEntry {
  guess: number
  hint: string
}

interface GuessHistoryProps {
  history: HistoryEntry[]
}

const GuessHistory: React.FC<GuessHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return null
  }

  return (
    <div className="guess-history">
      <h2>Guess History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            Guess: {entry.guess} - {entry.hint}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuessHistory