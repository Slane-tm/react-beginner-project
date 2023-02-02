import React from 'react'
import './index.scss';

function App() {
  const [count, setState] = React.useState(0)

  function incCount() {
    setState(count + 1)
  }

  function decCount() {
    setState(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decCount} className="minus">- Минус</button>
        <button onClick={incCount} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
