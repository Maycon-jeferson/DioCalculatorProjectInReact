import Imput from './components/Imput'
// Importa um componente chamado Input de um arquivo chamado Input dentro do diretório ./components

import Buttom from './components/Button'
//mporta um componente chamado Button de um arquivo chamado Button dentro do diretório ./components

import { Conteiner, Content, Row } from "./styles";
import { useState } from 'react';
// Importa os estilos CSS do componente a partir de um arquivo chamado styles.js
//Importa o hook useState do React para gerenciar o estado do componente

const App = () => { //Define o componente funcional App, que é exportado como padrão.
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
//Inicializa três estados usando o hook useState: currentNumber (para armazenar o número atual digitado), firstNumber (para armazenar o primeiro número da operação) e operation (para armazenar o tipo de operação).

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };
//Define funções para lidar com eventos, como limpar a calculadora, adicionar números, realizar operações de soma, subtração, multiplicação, divisão e calcular o resultado final.

  const handleAppNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' :prev}${number}`)
  }
  //Renderiza o componente Container, que contém a estrutura da calculadora com Inputs para exibir os números e Buttons para interação do usuário.

  const handleSumNunber = () =>{

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleMinusNunber = () =>{

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleDivNunber = () =>{

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleMultNunber = () =>{

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleEquals = () =>{

    if(firstNumber !== '0' && operation !== '' && currentNumber !== ('0')){
      switch(operation){
        case '+':
            handleSumNunber();
        break;

        case '-':
          handleMinusNunber();
        break;

        case '/':
          handleDivNunber();
        break;

        case '*':
          handleMultNunber();
        break;


        default:
          break;
      }
    }

  }

  return (
    //Os botões são configurados com eventos onClick que chamam as funções correspondentes para atualizar os estados e realizar cálculos.
    //Os componentes Input e Button são usados para renderizar caixas de entrada de texto e botões, respectivamente, na interface da calculadora.

    <Conteiner>
      <Content>
        <Imput value={currentNumber}/>

        <Row>
          <Buttom label="0" onClick={() => handleAppNumber('0')}/>
          <Buttom label="/" onClick={() => handleDivNunber('0')}/>
          <Buttom label="C" onClick={handleClear}/>
          <Buttom label="x" onClick={() => handleMultNunber('0')}/>
        </Row>
        
        <Row>
          <Buttom label="7" onClick={() => handleAppNumber('7')}/>
          <Buttom label="8" onClick={() => handleAppNumber('8')}/>
          <Buttom label="9" onClick={() => handleAppNumber('9')}/>
          <Buttom label="-" onClick={handleMinusNunber}/>
        </Row>

        <Row>
          <Buttom label="4" onClick={() => handleAppNumber('4')}/>
          <Buttom label="5" onClick={() => handleAppNumber('5')}/>
          <Buttom label="6" onClick={() => handleAppNumber('6')}/>
          <Buttom label="+" onClick={handleSumNunber}/>
        </Row>

        <Row>
          <Buttom label="1" onClick={() => handleAppNumber('1')}/>
          <Buttom label="2" onClick={() => handleAppNumber('2')}/>
          <Buttom label="3" onClick={() => handleAppNumber('3')}/>
          <Buttom label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Conteiner>
  );
}
//Os estilos CSS estão definidos no arquivo styles.js e são importados para estilizar a aparência da calculadora.

export default App;
