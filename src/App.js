import Imput from './components/Imput'
import Buttom from './components/Button'

import { Conteiner, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };


  const handleAppNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' :prev}${number}`)
  }

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

export default App;
