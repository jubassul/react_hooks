import React from "react";
import { useState, useEffect } from "react";
export const ExampleEffect = () => {
  //crio um useState para mudar o estado do meu texto chamado no h2, pois não quero ele fixo.
  const [text, setTexts] = useState("");

  useEffect(() => {
    //fazendo requisição (trazendo do backend to frontend)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      //capturando a resposta do backend e transformando ele em json]
      .then((response) => response.json())
      //jogando o meu json dentro da funcao de mudar estado setTexts, faço isso, pois quero usar ela na minha aplicacao
      .then((json) => setTexts(json));
  }, []);
  console.log("nome", text);
  return (
    <>
      <h1>UseEffect</h1>
      <ul>
        <li>
          serve para que eu ative certos códigos, conforme o ciclo de vida do
          componente
        </li>
        <li>utilizo quando eu quero puxar dados do backend</li>
      </ul>
      <h2>id- {text.userId}</h2>
    </>
  );
};
