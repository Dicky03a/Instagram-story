'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkWinner(board: (string | null)[]) {
  for (let i = 0; i < WIN_PATTERNS.length; i++) {
    const [a, b, c] = WIN_PATTERNS[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (!board.includes(null)) return 'Draw';
  return null;
}

const minimax = (currentBoard: (string | null)[], depth: number, isMaximizing: boolean): number => {
  let result = checkWinner(currentBoard);
  if (result === 'O') return 10 - depth;
  if (result === 'X') return depth - 10;
  if (result === 'Draw') return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = 'O';
        let score = minimax(currentBoard, depth + 1, false);
        currentBoard[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = 'X';
        let score = minimax(currentBoard, depth + 1, true);
        currentBoard[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const getBestMove = (currentBoard: (string | null)[]) => {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < 9; i++) {
    if (!currentBoard[i]) {
      currentBoard[i] = 'O';
      let score = minimax(currentBoard, 0, false);
      currentBoard[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default function UnbeatableTicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const timer = setTimeout(() => {
        const aiMove = getBestMove([...board]);
        if (aiMove !== -1) {
          const newBoard = [...board];
          newBoard[aiMove] = 'O';
          setBoard(newBoard);
          const newWinner = checkWinner(newBoard);
          if (newWinner) {
            setWinner(newWinner);
          } else {
            setIsPlayerTurn(true);
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board, winner]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) return;
    
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setIsPlayerTurn(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsPlayerTurn(true);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <div className="flex justify-between w-full mb-6 px-4">
        <div className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${isPlayerTurn && !winner ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
          You (X)
        </div>
        <div className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${!isPlayerTurn && !winner ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
          AI (O)
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full bg-gray-100 p-2 sm:p-3 rounded-3xl">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleCellClick(i)}
            disabled={!!cell || !!winner || !isPlayerTurn}
            className={`h-20 sm:h-24 md:h-28 bg-white rounded-2xl text-4xl md:text-5xl font-extrabold flex items-center justify-center transition-all duration-300 ${!cell && !winner && isPlayerTurn ? 'hover:bg-gray-50 active:scale-95 cursor-pointer' : 'cursor-default'} ${cell === 'X' ? 'text-black' : 'text-red-500'}`}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="h-24 mt-8 flex items-center justify-center w-full">
        {winner && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="text-xl md:text-2xl font-extrabold">
              {winner === 'Draw' ? "It's a Draw!" : winner === 'X' ? "You Won! (Wait, that's illegal)" : "AI Wins!"}
            </div>
            <button 
              onClick={resetGame}
              className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors active:scale-95"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}