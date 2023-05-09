//This example shows how to extract a component's prop types which is based off React.ComponentProps
// and re-use it in another component 
//The use-case for this is when one custom component wants to use the exact prop type of another component

//Video: https://www.youtube.com/watch?v=AHadSDk7i6s&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=23
import { Greet } from "../Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (<div>
        Hello {props.name}!
    </div>)
}