

import { createReducer,on, State } from "@ngrx/store";
import { decrement, increment } from "./counter.action";


const initialState = 0;


// export const counterReducer = createReducer(initialState,
//     // on(increment,(state => state + 1)),
//     on(increment,(state,action)=> state + action.value),
//     // on(decrement,(state => state - 1))
//     on(decrement,(state,action)=> state - action.value)
// );



export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    console.log('Reducer - Increment Action Processed:', { state, action });
    return state + action.value;
  }),
  on(decrement, (state, action) => {
    console.log('Reducer - Decrement Action Processed:', { state, action });
    return state - action.value;
  })
);



   

// export function counterReducer(state = initialState, action: any) {
//     if (action.type === '[Counter] Increment'){
//     return state + action.value;
//     } else if(action.type === '[Counter] Decrement'){
//     return state - action.value
//     }
    
//     return state;
// }
