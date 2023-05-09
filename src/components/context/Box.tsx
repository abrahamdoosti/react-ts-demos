//video: https://www.youtube.com/watch?v=rbtTb9hLYS8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=14
import { useContext } from "react"
import { ThemeConext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeConext)
    return <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>
}



/* In React, useContext is a hook that allows you to consume a context that has been created by a parent component.

A context in React is a way to pass data down the component tree without having to pass props manually at every level. 
Instead, you can create a context object using the createContext function and provide it to the parent component using a Context.
Provider component. Then, any child component can consume that context using the useContext hook.

 It is often used to provide a "global" state or data that can be accessed by multiple components.

Here's an example of how to use useContext:

// Create a context object
const UserContext = React.createContext();

// Create a parent component that provides the context
function App() {
  const user = { name: 'John', email: 'john@example.com' };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

// Create a child component that consumes the context
function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

In this example, the UserContext object is created using the createContext function.
The App component provides the context by wrapping the Profile component in a UserContext.
Provider component and passing in a user object as the value of the context.

The Profile component then uses the useContext hook to consume the UserContext and 
retrieve the user object that was passed down by the App component. 
The Profile component can then use the user object to render the user's name and email.

Using useContext can simplify the process of passing data down the component tree, 
as it allows you to avoid "prop drilling" and pass data down implicitly through the context. */
