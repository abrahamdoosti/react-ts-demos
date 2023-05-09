//Video: https://www.youtube.com/watch?v=4GchlC06ca0&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=22
import { Children } from "react"

//This is to show how to wrap html elements and create custom components which can be used in raact app.
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

//We will use the value of ButtonProps to style the button element.
/**
 * Using the ...rest syntax in this way allows for more flexibility and customization when using React components, 
 * as it allows you to pass any additional props to child components without having to explicitly define them in the component's props.
 */
export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return <button className={`class-name-${variant}`}{...rest}>{children}</button>
}

/**
 * from Chat GTP Omit example
 * 
 * 
 * type Props = {
  name: string;
  age: number;
  email: string;
};

type PropsWithoutEmail = Omit<Props, 'email'>;

function Person(props: PropsWithoutEmail) {
  // ...
}

In this example, the Props type has three properties: name, age, and email. The Omit type is then used to create a new type called PropsWithoutEmail that excludes the email property from the Props type.

The Person component then uses the PropsWithoutEmail type as its props, which means that it only receives the name and age props and does not receive the email prop.

Using Omit can make your code more flexible and easier to maintain by allowing you to create new types from existing types that exclude certain properties. This can help prevent bugs and make it easier to refactor your code in the future.

 */