//video: https://www.youtube.com/watch?v=lSh9RyYcnPA&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=12
//       https://www.youtube.com/watch?v=bcmes6hUO3U&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=13
import { useReducer } from "react";
type CounterState = {
    count: number
}
type UpdateAction={
    type: 'increment' | 'decrement'
    payload: number
}
type ResetAction={
    type: 'reset'
}
//The following is called Discriminated union
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}<br />
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Incremtnt 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </>
    )
}

{/*
`useReducer` is a hook in React that allows you to manage state using a reducer function. 
In TypeScript, you can define the state and action types to provide type safety to your code.

Here's an example of how you can use `useReducer` with TypeScript:

```
import React, { useReducer } from 'react';

type State = {
  count: number;
};

type Action =
  | { type: 'increment'; }
  | { type: 'decrement'; };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

In this example, we define the `State` type as an object with a `count` property that is a number.
 We also define the `Action` type as a union of two objects with a `type` property that is a string literal of either `'increment'` or `'decrement'`.

The `reducer` function takes a `state` and an `action`, and returns a new `state` based on the `action` that was dispatched.

The `Counter` component uses the `useReducer` hook to manage the state of the `count` property. 
It also uses the `dispatch` function to dispatch the `increment` and `decrement` actions when the corresponding buttons are clicked.

Using TypeScript with `useReducer` can provide type safety to your code by allowing you to define the state and action types. 
This can help prevent errors and make your code more maintainable and easier to refactor. 

*/}