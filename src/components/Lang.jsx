//icon
import javaScript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';

//game form
import Game from './Game';

//actual games - js
import WordRelayJs from './js-games/WordRelayJs';
import CalculatorJs from './js-games/CalculatorJs';
import BaseballJs from './js-games/BaseballJs';
import LottoJs from './js-games/LottoJs';
import RSPJs from './js-games/RSPJs';
import ResponseJs from './js-games/ResponseJs';
import TickTackToJs from './js-games/TickTackToJs';
import TextRPGJs from './js-games/TextRPGJs';
import CardJs from './js-games/CardJs';
import MineJs from './js-games/MineJs';
import WhackAMoleJs from './js-games/WhackAMoleJs';
import TwoThousandsJs from './js-games/TwoThousandsJs';

//actual games - react
import GuGuDan from './react-games/GuGuDan';
import WordRelay from './react-games/WordRelay';
import Baseball from './react-games/Baseball';
import Response from './react-games/Response';
import RSP from './react-games/RSP';
import Lotto from './react-games/Lotto';
import TickTackTo from './react-games/TickTackTo';
import Mine from './react-games/Mine';

export default function Lang({ lang }) {
  let logo;
  let arr;

  if (lang === 'javaScript') {
    logo = javaScript;
    arr = [
      {
        id: 1,
        title: '끝말잇기',
        exp: '혼자서 끝말잇기를 해보세요',
        gameContent: <WordRelayJs />,
      },
      {
        id: 2,
        title: '계산기',
        exp: '계산기를 사용해보세요',
        gameContent: <CalculatorJs />,
      },
      {
        id: 3,
        title: '야구게임',
        exp: '4자리 숫자를 맞춰보세요',
        gameContent: <BaseballJs />,
      },
      {
        id: 4,
        title: '로또',
        exp: '직접 로또 번호를 추첨해보세요',
        gameContent: <LottoJs />,
      },
      {
        id: 5,
        title: '가위바위보',
        exp: '컴퓨터와 가위바위보를 해보세요',
        gameContent: <RSPJs />,
      },
      {
        id: 6,
        title: '반응속도',
        exp: '클릭해서 반응속도를 테스트해보세요',
        gameContent: <ResponseJs />,
      },
      {
        id: 7,
        title: '틱택토',
        exp: '컴퓨터와 틱택토를 겨뤄보세요',
        gameContent: <TickTackToJs />,
      },
      {
        id: 8,
        title: 'RPG',
        exp: 'RPG를 플레이해보세요',
        gameContent: <TextRPGJs />,
      },
      {
        id: 9,
        title: '카드 게임',
        exp: '카드를 외우고 짝을 맞춰보세요',
        gameContent: <CardJs />,
      },
      {
        id: 10,
        title: '지뢰찾기',
        exp: '지뢰찾기를 플레이해보세요',
        gameContent: <MineJs />,
      },
      {
        id: 11,
        title: '두더지 잡기',
        exp: '두더지를 잡아보세요',
        gameContent: <WhackAMoleJs />,
      },
      {
        id: 12,
        title: '2048게임',
        exp: '2048을 만들어보세요',
        gameContent: <TwoThousandsJs />,
      },
    ];
  } else if (lang === 'react') {
    logo = react;
    arr = [
      {
        id: 1,
        title: '구구단',
        exp: '랜덤 구구단을 맞혀보세요',
        gameContent: <GuGuDan />,
      },
      {
        id: 2,
        title: '끝말잇기',
        exp: '혼자서 끝말잇기를 해보세요',
        gameContent: <WordRelay />,
      },
      {
        id: 3,
        title: '숫자야구게임',
        exp: '4자리 숫자를 맞춰보세요',
        gameContent: <Baseball />,
      },
      {
        id: 4,
        title: '반응속도',
        exp: '클릭해서 반응속도를 테스트해보세요',
        gameContent: <Response />,
      },
      {
        id: 5,
        title: '가위바위보',
        exp: '컴퓨터랑 가위바위보를 해보세요',
        gameContent: <RSP />,
      },
      {
        id: 6,
        title: '로또',
        exp: '로또번호를 추첨해보세요',
        gameContent: <Lotto />,
      },
      {
        id: 7,
        title: '틱택토',
        exp: '컴퓨터와 틱택토를 겨뤄보세요',
        gameContent: <TickTackTo />,
      },
      {
        id: 8,
        title: '지뢰찾기',
        exp: '지뢰찾기를 해보세요',
        gameContent: <Mine />,
      },
    ];
  }

  return (
    <div className="lang col-lg-5">
      <div className="img">
        <img src={logo} alt="js" />
      </div>
      {arr.map((v) => (
        <Game
          key={v.id}
          id={v.id}
          title={v.title}
          exp={v.exp}
          gameContent={v.gameContent}
        />
      ))}
    </div>
  );
}
