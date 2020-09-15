import { createStore } from 'redux';
import {CounterReducer} from './CounterReducer';

const store = createStore(CounterReducer)
export default store


// import { configureStore } from '@reduxjs/toolkit';
// import {CounterReducer} from './CounterReducer';

// export default configureStore({
//     reducer:{
//         counter:CounterReducer
//     }
// })


