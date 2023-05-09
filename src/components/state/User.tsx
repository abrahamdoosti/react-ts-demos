import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    //below code tells typescript that User can be of types , null or AuthUser
    const [user, setUser] = useState<AuthUser | null>(null)

    //we can also use type assertion to tell typescript that User is always of type AuthUser
    // this approach is useful when you don't expect to set User as null
    //const[user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Vishaws',
            email: 'vishwas@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )


}