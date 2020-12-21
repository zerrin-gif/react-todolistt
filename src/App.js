import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  const [height, setHeight] = React.useState(0);
  const [wat, setWat] = React.useState(0);

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, [wat]);

  return (
    <div>
      <h1 ref={measuredRef}><div>Hello, world</div>{new Array(wat).fill('').map(() => <div>:)</div>)}</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
      <button onClick={() => setWat(wat+1)}>Make it taller</button>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
