import {increament,decreament} from './Action'

const initialCounter={
    counter:0
}
export const counterReducer=(state=initialCounter,action)=>{
    switch(action.type){
        case increament :
            return{...state,counter:state.counter+1};
            case decreament:
                return{...state,counter:state.counter-1};
            case 'RESET':
                return {...initialCounter}
        default:
            return state
    }

}