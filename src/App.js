import React, { useState } from 'react';
import "./App.css";
function App() {
    const [count, setCount] = useState(1);
    let color=(count>0)?"green":(count<0)?"red":"black";

    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const reset    =()=>setCount(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{color}} id="value"> {count} </span>
      <div className="btn-group">
        <button onClick={decrement} className="btn btn-dec">DECREASE</button>
        <button onClick={reset}     className="btn btn-res">RESET</button>
        <button onClick={increment} className="btn btn-inc">INCREASE</button>
      </div>
    </div>
  )
}

export default App;