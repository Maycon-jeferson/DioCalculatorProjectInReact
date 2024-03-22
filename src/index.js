//Este código é uma configuração básica para renderizar um componente principal (App) em uma aplicação React usando o ReactDOM, além de incluir estilos globais usando styled-components.

import React from 'react';//mporta o módulo principal do React
import ReactDOM from 'react-dom/client';//Importa o ReactDOM
import App from './App';//Importa o componente principal da aplicação (App) a ser renderizado.

import GlobalStyles from './global'//Importa os estilos globais definidos em um arquivo chamado global.js (ou global.jsx).

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Cria um ponto de entrada (root) para a renderização dos componentes React. O método ReactDOM.createRoot é usado para criar um novo root e é passado o elemento DOM onde o componente principal será renderizado (normalmente um elemento com id 'root' no HTML).
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

//<React.StrictMode>: Envolve os componentes a serem renderizados com o modo estrito do React, que ajuda a identificar potenciais problemas no código, como a utilização de APIs obsoletas.

//<GlobalStyles />: Renderiza os estilos globais definidos no arquivo global.js (ou global.jsx), que foram importados anteriormente.

//<App />: Renderiza o componente principal da aplicação.