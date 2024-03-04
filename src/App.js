import "./App.css";
import React, { useState } from "react";
import "./CSS/style.css";

function App() {
const [num, setNum] = useState(0);

function inc(n){
  setNum(num + n);
}

function dec(n){
  setNum(num - n)
}
  return (
    <div className="main">
      <h1>{num}</h1>
      <button className="btn" onClick={() => inc(1)}>Increment</button>
      <button className="btn" onClick={() => dec(1)}>Decrement</button>
    </div>
  );
}

export default App;
