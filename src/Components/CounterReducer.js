const initialState={
    counter:0
}
export const CounterReducer=(state=initialState,action)=>
{
    switch(action.type){
        case 'INCREAMENT':
            return{...state,counter:state.counter+1}
        case 'DECREAMENT':
            return {...state,counter:state.counter-1}
        default:
            return state
    }
}