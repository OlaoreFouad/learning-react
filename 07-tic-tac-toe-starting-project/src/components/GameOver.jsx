export default function GameOver({ winner, winnerName, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner ? <p>{winnerName} won!</p> : <p>It's a draw!</p>}
      <p>
        <button onClick={onRematch}>Rematch</button>
      </p>
    </div>
  );
}
