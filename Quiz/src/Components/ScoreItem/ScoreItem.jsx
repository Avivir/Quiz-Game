export default function ScoreItem({ number, playerName, gameName, score }) {
  return (
    <ul className="h-auto">
      <li className="flex place-content-around flex-row items-start h-auto">
        <p className="ml-5" style={{ flex: "1" }}>
          {number}
        </p>
        <p style={{ flex: "3" }}>{playerName}</p>
        <p style={{ flex: "2" }}>{gameName}</p>
        <p style={{ flex: "1" }}>{score}</p>
      </li>
    </ul>
  );
}
