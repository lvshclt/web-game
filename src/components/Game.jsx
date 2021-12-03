export default function Game({ title, exp, gameContent }) {
  return (
    <div className="game">
      <div className="title">
        <h1>01 구구단</h1>
      </div>
      <div className="exp">
        <h3>버튼을 눌러 시작해주세요</h3>
      </div>
      <div className="game-content">
        <h1>게임내용</h1>
      </div>
    </div>
  );
}
