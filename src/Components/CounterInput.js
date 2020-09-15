import React from 'react';
import {useDispatch} from 'react-redux'
import {increamentAction,decreamentAction} from './Action'
function CounterInput(props) {
    const dispatch=useDispatch()
    return (
    <div >
        <h1>CounterInput</h1>
        <button onClick={() => { dispatch(increamentAction()) } } > + </button>
        <button onClick={
            () => { dispatch(decreamentAction()) } } > - </button>
            </div>
    );

}

export default CounterInput;