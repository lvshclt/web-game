import Line from './Line';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router';
import Sorry from './Sorry';
export default function Content() {
  const lines = useFetch('http://localhost:3001/lines/');

  let isDelMode = false;
  const bbb = useParams().aaa;
  if (bbb === 'delete-goals') isDelMode = true;
  else if (bbb !== undefined) {
    return <Sorry />;
  }

  return (
    <div className="content col-lg-12">
      {lines.map((line) => (
        <Line
          key={line.id}
          number={line.number}
          classification={line.classification}
          importance={line.importance}
          goal={line.goal}
          due={line.due}
          status={line.status}
          completed={line.completed}
          isDelMode={isDelMode}
        />
      ))}
      {/* {isDelMode && (
        <div>
          <button className={'no'}>삭제하기</button>
          <Link to="/">
            <button className={'not-really'}>돌아가기</button>
          </Link>
        </div>
      )} */}
    </div>
  );
}
