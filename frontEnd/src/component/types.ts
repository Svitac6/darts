// Interface pour un joueur
export interface PlayerType {
  id: number;
  name: string;
}

// Interface pour les props du composant Player
export interface PlayerProps {
  playerIndex: number;
  name: string;
  onMove: (index: number, direction: "up" | "down") => void;
  onDelete: (index: number) => void;
}
