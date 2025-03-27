import Apple from './Apple';
import './App.css';
import { useState } from 'react';




function App() {
  const [count,setCount]=useState(0);
  const Increment=()=>{
      setCount(count+1);
  };
  const Dcrement=()=>{
    setCount(count-1);
  };
  return (
    <div className="App">
    <button onClick={Increment}>Increment</button>
    {count}
    <button onClick={Dcrement}>Dcrement</button>

    <Apple/>
    </div>


  );
}

export default App;
