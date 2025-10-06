import React, { useEffect, useState, createContext } from "react";
import { LightTheme, DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialMode = () => {
        if (typeof localStorage === "undefined") return false; // Default ke false (light)
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        // const userPrefersDark = getPrefColorScheme(); // Baris ini tidak lagi kita butuhkan

        if (isReturningUser) {
            return savedMode;
        }
        
        // Baris ini diubah agar defaultnya SELALU 'light' (false) untuk pengunjung baru
        return false; 
     };

    const [theme, setTheme] = useState(getInitialMode() ? "dark" : "light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        typeof localStorage !== "undefined" &&
            localStorage.setItem("dark", JSON.stringify(theme === "dark"));
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            <MuiThemeProvider
                theme={theme === "light" ? LightTheme : DarkTheme}
            >
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
