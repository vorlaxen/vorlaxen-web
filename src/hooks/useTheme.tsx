import { ThemeContext } from "@/context/themeProvider"
import { useContext } from "react"

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be uset within a ThemeProvider");
    }
    return context;
}