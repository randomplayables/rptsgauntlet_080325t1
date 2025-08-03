import React, { useState, FormEvent, ChangeEvent } from 'react'

interface NumberPickerProps {
  onPick: (secretNumber: number) => void
}

const MIN_NUMBER = 1
const MAX_NUMBER = 100

const NumberPicker: React.FC<NumberPickerProps> = ({ onPick }) => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const num = parseInt(input, 10)
    if (!isNaN(num) && num >= MIN_NUMBER && num <= MAX_NUMBER) {
      onPick(num)
    }
  }

  const parsed = parseInt(input, 10)
  const isValid = !isNaN(parsed) && parsed >= MIN_NUMBER && parsed <= MAX_NUMBER

  return (
    <form onSubmit={handleSubmit} className="number-picker">
      <h2>Pick a Secret Number</h2>
      <div>
        <label htmlFor="secret-number-input">
          Secret Number ({MIN_NUMBER} - {MAX_NUMBER}):
        </label>
        <input
          id="secret-number-input"
          type="number"
          min={MIN_NUMBER}
          max={MAX_NUMBER}
          value={input}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!isValid}>
        Confirm
      </button>
    </form>
  )
}

export default NumberPicker