import React from 'react';
import {useSelector} from 'react-redux'

function CounterOutput() {
    const counter=useSelector((state=>state.counter))
    return (
        <div>
        <h1> CounterOutput {counter} </h1>
        </div>
    );

}

export default CounterOutput;