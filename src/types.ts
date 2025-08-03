export type Phase = 'setup' | 'pick' | 'guess' | 'result';

export interface Players {
  challenger: string;
  opponent: string;
}

export type Hint = 'Too low' | 'Too high' | 'Correct';

export interface HistoryEntry {
  guess: number;
  hint: Hint;
}

export interface UseGuessNumberGameResult {
  phase: Phase;
  players: Players;
  history: HistoryEntry[];
  secretNumber?: number;
  setupGame: (challenger: string, opponent: string) => void;
  pickSecretNumber: (secretNumber: number) => void;
  makeGuess: (guess: number) => void;
  resetGame: () => void;
}