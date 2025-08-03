import React, { useState, FormEvent, ChangeEvent } from 'react'

interface NumberGuesserProps {
  onGuess: (guess: number) => void
}

const MIN_NUMBER = 1
const MAX_NUMBER = 100

const NumberGuesser: React.FC<NumberGuesserProps> = ({ onGuess }) => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const num = parseInt(input, 10)
    if (!isNaN(num) && num >= MIN_NUMBER && num <= MAX_NUMBER) {
      onGuess(num)
      setInput('')
    }
  }

  const parsed = parseInt(input, 10)
  const isValid = !isNaN(parsed) && parsed >= MIN_NUMBER && parsed <= MAX_NUMBER

  return (
    <form onSubmit={handleSubmit} className="number-guesser">
      <h2>Make a Guess</h2>
      <div>
        <label htmlFor="guess-input">
          Your Guess ({MIN_NUMBER} - {MAX_NUMBER}):
        </label>
        <input
          id="guess-input"
          type="number"
          min={MIN_NUMBER}
          max={MAX_NUMBER}
          value={input}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!isValid}>
        Guess
      </button>
    </form>
  )
}

export default NumberGuesser