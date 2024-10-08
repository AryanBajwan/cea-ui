import { ReactNode, createContext, useContext, useState } from 'react';

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: ()  => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}

// ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const localTheme = localStorage.getItem("theme");
        return (localTheme === "light" || localTheme === "dark") ? localTheme : "dark";
    });

    const toggleTheme = () => {
        const newTheme = (theme == "light") ? "dark" : "light";
        // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}