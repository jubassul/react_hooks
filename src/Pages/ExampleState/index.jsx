import React from "react";
import { useState } from "react";
export const  ExampleState = () => {
const [count, setCount] = useState(0) //valor do estado inicial

const addCount = () =>{
  
//pego o estado anterior e somo + 1
setCount((prevState)=> prevState + 1)
//setCount(count + 1) -> forma nao recomendada 
}
  return (
    <div>
        <h1>UseState</h1>
        <ul>
          <li>altera o estado do componente</li>
          <li>const [count, setCount] = useState(0)</li>
          <li>variavel count: guarda o estado</li>
          <li>funcao setCount: muda o estado</li>
        </ul>
        <h2>{count}</h2>
        <button onClick={addCount}>Incremento</button>
    </div>
  );
}
