import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sum, subtract } from '../store/Calculator/Calculator.actions';

const Calculator = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();

  //Mesmo funcionamento do mapStateToProps 
  //O Resultado da const result vêm do reducer (redux)
  const result = useSelector(state => state.calculator);

  //Mesmo funcionamento do mapDispatchToProps
  const dispatch = useDispatch();

  return <>
    <input 
      type="text" 
      placeholder="a" 
      value={a}
      onChange={e => setA(Number(e.target.value))}
    />
    <input 
      type="text" 
      placeholder="b"
      value={b}
      onChange={e => setB(Number(e.target.value))}
    />

    <button onClick={() => dispatch(sum(a, b))}>Somar</button>
    <button onClick={() => dispatch(subtract(a, b))}>Subtrair</button>

    <div>
      { result }
    </div>
  </>;
}

export default Calculator;