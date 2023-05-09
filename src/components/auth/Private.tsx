//Video: https://www.youtube.com/watch?v=qvdnTfyv7y8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=18
import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean
    //If we have to pass in a  component prop, use React.ComponentType
    //If that component itself accepts props, then specify the prop type in angle brackets( as shown below)
    component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Vishwas' />
    }
    else {
        return <Login />
    }

}