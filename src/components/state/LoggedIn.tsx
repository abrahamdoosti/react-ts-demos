//video: https://www.youtube.com/watch?v=2NKNjeB0WVs&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=9
import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
     }
    const handleLogout = () => {
        setIsLoggedIn(false)
     }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>

        </div>
    )
}

{/* 
In React, `useState` is a hook that allows you to manage state in a functional component. 
In TypeScript, you can define the state type to provide type safety to your code.

Here's an example of how you can use `useState` with TypeScript:

```
import React, { useState } from 'react';

type Props = {
  initialCount: number;
};

function Counter({ initialCount }: Props) {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
```

In this example, we define the `Props` type as an object with an `initialCount` property that is a number.

The `Counter` component uses the `useState` hook to manage the state of the `count` property. 
We also define the type of the `count` state as a number by providing the generic type argument `<number>` to the `useState` function call.

The `setCount` function is used to update the `count` state.
We provide a new value to the `setCount` function by passing a function that takes the current count value and returns a new count value based on that.

Using TypeScript with `useState` can provide type safety to your code by allowing you to define the state type. 
This can help prevent errors and make your code more maintainable and easier to refactor.
*/}