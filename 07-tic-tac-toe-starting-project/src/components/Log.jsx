export default function Log({ gameLogs }) {
  return (
    <ol id="log">
      {gameLogs.map((log, logIndex) => (
        <li key={logIndex}>
          Played {log.player} @ {log.square.row}x{log.square.col}
        </li>
      ))}
    </ol>
  );
}
