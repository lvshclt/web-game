import GNB from './components/GNB';
import JavaScript from './components/JavaScript';

function App() {
  return (
    <div className="App container col-lg-12">
      <div className="row">
        <GNB />
        <div className="body col-lg-10">
          <JavaScript />
          <JavaScript />
        </div>
      </div>
    </div>
  );
}

export default App;
