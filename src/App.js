import GNB from './components/GNB';
import Lang from './components/Lang';

function App() {
  return (
    <div className="App container col-lg-12">
      <div className="row">
        <GNB />
        <div className="body col-lg-10">
          <Lang lang="javaScript" />
          <Lang lang="react" />
        </div>
      </div>
    </div>
  );
}

export default App;
