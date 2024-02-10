import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState('');

  const calculationResult = (value) => {
    try {
      const operators = ['+', '-', '*', '/'];
      let operator = null;

      for (let i = 0; i < value.length; i++) {
        if (operators.includes(value[i])) {
          operator = value[i];
          break;
        }
      }

      if (!operator) {
        throw new Error('Invalid Expression');
      }

      const [operand1, operand2] = value.split(operator).map(parseFloat);

      if (isNaN(operand1) || isNaN(operand2)) {
        throw new Error('Invalid Operands');
      }

      let result;

      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          if (operand2 === 0) {
            throw new Error('Cannot divide by zero');
          }
          result = operand1 / operand2;
          break;
        default:
          throw new Error('Invalid Operator');
      }

      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };

  const handleButton = (input) => {
    if (input === 'C') {
      setValue('');
    } else if (input === '<') {
      setValue((prevValue) => prevValue.slice(0, -1));
    } else if (input === '=') {
      calculationResult(value);
    } else {
      setValue((prevValue) => prevValue + input);
    }
  };

  return (
    
    <div className='container'>
         <div className='calc'>
        <h1 id='input'>{value}</h1>
        <div className='buttons'>
          <button className='op' onClick={() => handleButton('C')}>C</button>
          <button className='op' onClick={() => handleButton('<')}>&lt;</button>
          <button className='op' onClick={() => handleButton('%')}>%</button>
          <button className='op' onClick={() => handleButton('/')}>/</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handleButton('7')}>7</button>
          <button onClick={() => handleButton('8')}>8</button>
          <button onClick={() => handleButton('9')}>9</button>
          <button className='op' onClick={() => handleButton('*')}>*</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handleButton('4')}>4</button>
          <button onClick={() => handleButton('5')}>5</button>
          <button onClick={() => handleButton('6')}>6</button>
          <button className='op' onClick={() => handleButton('-')}>-</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handleButton('1')}>1</button>
          <button onClick={() => handleButton('2')}>2</button>
          <button onClick={() => handleButton('3')}>3</button>
          <button className='op' onClick={() => handleButton('+')}>+</button>
        </div>
        <div className='buttons'>
          <button onClick={() => handleButton('0')}>0</button>
          <button onClick={() => handleButton('00')}>00</button>
          <button onClick={() => handleButton('.')}>.</button>
          <button className='op' onClick={() => handleButton('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
