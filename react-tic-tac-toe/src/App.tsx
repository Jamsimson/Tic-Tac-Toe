import { useState } from "react";
import "./index.css";

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

function Square({ value, onSquareClick }: any) {
  return (
    <>
      <button
        className="h-16 w-20 border-solid border-black border-2 text-3xl font-semibold place-items-stretch"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}

function Board() {
  const [xIsNext, setXIxNext] = useState(true);
  const [squares, setSquare] = useState<any>(Array(9).fill(null));
  //
  function handleClick(i: any) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquare: any = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setXIxNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status: any;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-0  place-items-stretch">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Main
function App() {
  return (
    <>
      <div className="container mx-auto py-4">
        {/* bord tic tac toe */}
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    </>
  );
}

export default App;
