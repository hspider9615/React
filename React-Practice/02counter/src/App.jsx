import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    // console.log('clicked', counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  const counterStyle = {
    color: counter > 0 ? 'green' : counter < 0 ? 'red' : 'black',
  };

  const buttonStyle = (action) => ({
    backgroundColor: action === 'add' ? 'lightblue' : 'lightcoral',
    color: 'Black',
    border: 'none',
    padding: '10px 20px',
    fontSize: '20px',
    cursor: 'pointer',
    margin: '5px',
  });

  return (
    <>
      <h1>Codex | Spider</h1>
      <h2 style={counterStyle}>Counter Value: {counter}</h2>

      <button style={buttonStyle('add')} onClick={addValue}>
        Add Value
      </button>
      <br />
      <button style={buttonStyle('remove')} onClick={removeValue}>
        Remove Value
      </button>
      {/* <p>footer: {counter}</p> */}
    </>
  );
}

export default App;
