    import { createAction ,props} from "@ngrx/store";

debugger
    export const increment = createAction(
      
        '[Counter] Increment',
        props<{value:number}>()
    );


    export const decrement = createAction(
        '[Counter] Decrement',
        props<{value:number}>()
    )