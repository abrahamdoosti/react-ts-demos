import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderPrps = {
    children: React.ReactNode
}

export const ThemeConext = createContext(theme)

 export const ThemeContextProvider = ({ children }: ThemeContextProviderPrps) => {
    return <ThemeConext.Provider value={theme}>{children}</ThemeConext.Provider>
}

