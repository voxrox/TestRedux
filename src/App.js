import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { decNumber, incNumber } from './actions';

function App() {
  const dispatch=useDispatch()
  const mystate=useSelector((state)=>state.changeTheNumber)
  return (
    <div>
      <button  onClick={()=>dispatch(decNumber())}>-</button>
      <button  onClick={()=>dispatch(incNumber())}>+</button>
      <input type="text" value={mystate}></input>
    </div>
  );
}

export default App;
