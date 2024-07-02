export default function ScoreItem({ number, playerName, categoryName, totalPoints }) {
  return (
    <ul className="h-auto">
      <li className="flex place-content-around flex-row items-start h-auto">
        <p className="ml-5" style={{ flex: "1" }}>
          {number}
        </p>
        <p style={{ flex: "3" }}>{playerName}</p>
        <p style={{ flex: "2" }}>{categoryName}</p>
        <p style={{ flex: "1" }}>{totalPoints}</p>
      </li>
    </ul>
  );
}
