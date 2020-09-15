import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

function App() {
    return (
        <div className="App">
        <h1> Redux </h1>
         <CounterOutput />
        <CounterInput />
         </div>
    );

}

export default App;