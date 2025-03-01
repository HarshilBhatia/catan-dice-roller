export interface RollHistory {
  dice1: number;
  dice2: number;
  dice3: number;
  timestamp: number;
}

export interface GameStats {
  rollHistory: RollHistory[];
  totalRolls: number;
} 