import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CounterInput} from './CounterInput'
import {CounterOutput} from './CounterOutput'


function App() {
    const [counter,setCounter]=useState(0)
    return (
        <div className="App">
        <h1> Redux Practice </h1>
        <CounterOutput counter={counter}/>
        <CounterInput counter={counter} setCounter={setCounter}/>

         </div>
    );

}

export default App;
