import { Hint } from '../types';

export function isValidGuess(guess: number, min: number = 1, max: number = 100): boolean {
  return Number.isInteger(guess) && guess >= min && guess <= max;
}

export function getHint(guess: number, secret: number): Hint {
  if (guess < secret) {
    return 'Too low';
  }
  if (guess > secret) {
    return 'Too high';
  }
  return 'Correct';
}