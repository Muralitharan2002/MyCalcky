
import './App.css';
import React, { useState } from 'react';

function App() {
  const [Result, setresult] = useState('');
  const [first, setfirst] = useState('');
  const [operator, setoperator] = useState('');

  const feel = (n) => {
    const value = n.target.getAttribute('data');
    if (value === '.' && Result.includes('.')) return;
    setresult(Result + value);
  };

  const undo = () => {
    setresult(String(Result).slice(0, -1));
    if (Result === '') {
      setresult(operator);
      setoperator(first);
      setfirst('');

    }

  };

  const Allclear = () => {
    setresult('');
    setfirst('');
    setoperator('');
  };

  const caloperat = (n) => {
    if (Result === '') return;
    if (first !== '') {
      let value = compute();
      setfirst(value);
    } else {
      setfirst(Result);
    }
    setresult('');
    setoperator(n.target.getAttribute('data'));

  };

  const calculate = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setresult(value);
    setfirst('');
    setoperator('');
  };

  const compute = () => {
    let finalresult;
    let firstnum = parseFloat(first);
    let secondnum = parseFloat(Result);
    if (isNaN(firstnum) || isNaN(secondnum)) return;
    switch (operator) {
      case '÷':
        finalresult = firstnum / secondnum;
        break;
      case 'x':
        finalresult = firstnum * secondnum;
        break;
      case '-':
        finalresult = firstnum - secondnum;
        break;
      case '+':
        finalresult = firstnum + secondnum;
        break;
      default: return
    }
    return finalresult;
  };
  return (

    <>
      <div className="calculator">
        <h1 className="animated-text">Play with My Calci</h1>
      </div>
      <div className="container">
        <div className="App">
          <first>{first} {operator}</first>
          <second>{Result}</second>

        </div>
        <div className="keyboard">
          <button className="btn" onClick={Allclear}>AC</button>
          <button className="btn" onClick={undo}>DEL</button>
          <button className="btn" data={'÷'} onClick={caloperat}>&divide;</button>
          <button className="btn" data={7} onClick={feel}>7</button>
          <button className="btn" data={8} onClick={feel}>8</button>
          <button className="btn" data={9} onClick={feel}>9</button>
          <button className="btn" data={'x'} onClick={caloperat}>&times;</button>
          <button className="btn" data={4} onClick={feel}>4</button>
          <button className="btn" data={5} onClick={feel}>5</button>
          <button className="btn" data={6} onClick={feel}>6</button>
          <button className="btn" data={'-'} onClick={caloperat}>&#8722;</button>
          <button className="btn" data={1} onClick={feel}>1</button>
          <button className="btn" data={2} onClick={feel}>2</button>
          <button className="btn" data={3} onClick={feel}>3</button>
          <button className="btn" data={'+'} onClick={caloperat}>&#43;</button>
          <button className="btn" data={0} onClick={feel}>0</button>
          <button className="btn" data={'.'} onClick={feel}>.</button>
          <button className="btn" data={'='} onClick={calculate}>&#61;</button>
        </div>
      </div>
    </>
  );
}

export default App;
