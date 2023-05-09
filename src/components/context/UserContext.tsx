//video: https://www.youtube.com/watch?v=9726Yq3Scjk&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=15
import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps = {
    children: React.ReactNode
}

//export const UserContext = createContext<UserContextType | null>(null)

//we will use type assertion to improve above code, that way we don't have to check for null in the User component
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
