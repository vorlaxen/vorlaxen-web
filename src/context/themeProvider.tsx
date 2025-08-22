import type { Theme, ThemeContextType, ThemeProviderProps } from "@/types";
import React, { createContext, useEffect, useState, type ReactNode } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children, defaultTheme = "light" }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") {
                return stored;
            }

            /* 
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                return prefersDark ? "dark" : "light";
            */

            return defaultTheme;
        }
        return defaultTheme;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
