import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count+1);
  }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
