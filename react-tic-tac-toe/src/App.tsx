import { useState } from "react";
import "./index.css";

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

function Square({ value }) {
  return (
    <>
      <button className="h-16 w-20 border-solid border-black border-2 text-3xl font-semibold place-items-stretch">
        {value}
      </button>
    </>
  );
}

function Board() {
  const [squares, setSquare] = useState<any>(Array(9).fill(null));
  return (
    <>
      <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-0  place-items-stretch">
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
        </div>
      </div>
    </>
  );
}

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
