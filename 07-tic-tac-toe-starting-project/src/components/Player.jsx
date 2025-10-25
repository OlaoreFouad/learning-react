import { useState } from "react";

export default function Player({
  initialPlayerName,
  symbol,
  isActive,
  onSavePlayerName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialPlayerName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handlePlayerNameChange(event) {
    const value = event.target.value;

    setPlayerName(value);
    onSavePlayerName(symbol, value);
  }

  return (
    <>
      <li className={`${isActive ? "active" : ""}`} key={symbol}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handlePlayerNameChange}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
