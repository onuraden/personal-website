import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [theme, setTheme] = useState("light");
    const [lang, setLang] = useState("eng");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    function toggleLang() {
        setLang(lang === "eng" ? "tur" : "eng");
    }

    return (
        <UserContext.Provider value={{theme, toggleTheme, lang, toggleLang}}>
            {children}
        </UserContext.Provider>
    )
}