import React, {useState} from "react";
import "./App.css";


function App() {

  const [count, setCount] = useState(0)
  // [name, setName] = (default value) ;hooks
  
  return (
    <div className="App">
      <header>
        <h1>counter app using state/hooks</h1>
      </header>
      <h2>current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => count >= 10 ? "" : setCount(count + 1)} >Increase Counter</button>
      <button onClick={() => count > 0 ? setCount(count - 1) : ""}>Decrease Counter</button>
    </div>
  );
}


export default App;