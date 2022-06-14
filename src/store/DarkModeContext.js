import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const DarkModeContext = ({ children }) => {

    const [theme, setTheme] = useState('light');
 
    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default DarkModeContext;