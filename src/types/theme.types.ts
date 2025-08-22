import type { ReactNode } from "react";

export type Theme = "light" | "dark";
export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}