import React from 'react'
import {useDispatch} from 'react-redux'
// import { counterReducer } from './CounterReducer'
import {increamentAction,decreamentAction} from './Action'
// before redux


// export const CounterInput = ({counter,setCounter}) => {
//     return (
//         <div>
//             <h3>Inputs</h3>
//             <button onClick={()=>setCounter(counter+1)}>+</button>
//             <button onClick={()=>setCounter(counter-1)}>-</button>
//             <button onClick={()=>setCounter(0)}>Reset</button><br/>
//         </div>
//     )
// }


// after redux

export const CounterInput = () => {
    const counterRedux=useDispatch()
    return (
        <div>
            <h3>Inputs</h3>
            <button onClick={()=>counterRedux(increamentAction())}>+</button>
            <button onClick={()=>counterRedux(decreamentAction())}>-</button>
            <button onClick={()=>counterRedux({type: 'RESET'})}>Reset</button>
        </div>
    )
}
