import js from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import Game from './Game';

export default function JavaScript() {
  const [title, exp, gameContent] = [1, 2, 3];

  return (
    <div className="lang col-lg-5">
      <div className="img">
        <img src={js} alt="js" />
      </div>
      <Game title={title} exp={exp} gameContent={gameContent} />
      <Game title={title} exp={exp} gameContent={gameContent} />
      <Game title={title} exp={exp} gameContent={gameContent} />
      <Game title={title} exp={exp} gameContent={gameContent} />
    </div>
  );
}
