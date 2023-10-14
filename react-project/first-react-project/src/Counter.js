import { useState } from "react";

const Counter = () =>{
    let [counter, setCounter] = useState(0);

    function increase(){
        setCounter(counter + 1);
    };
    function decrease(){
        setCounter(counter - 1);
    };
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  };
  
  export default Counter;