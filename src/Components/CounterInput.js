import React from 'react';
import {useDispatch} from 'react-redux'

function CounterInput(props) {
    const dispatch=useDispatch()
    return (
    <div >
        <h1>CounterInput</h1>
        <button onClick={() => { dispatch({
            type:'INCREAMENT'
        }) } } > + </button>
        <button onClick={
            () => { dispatch({type:'DECREAMENT'}) } } > - </button>
            </div>
    );

}

export default CounterInput;