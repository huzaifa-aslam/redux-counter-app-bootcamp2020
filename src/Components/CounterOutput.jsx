import React from 'react'
import {useSelector} from 'react-redux'


// before redux

// export const CounterOutput = ({counter}) => {
//     return (
//         <div>
//             <h3>OutPut {counter}</h3>
//         </div>
//     )
// }


// after redux

export const CounterOutput = () => {
    const counterRedux=useSelector(state=>state.counter)
    return (
        <div>
            <h3>OutPut {counterRedux}</h3>
        </div>
    )
}
