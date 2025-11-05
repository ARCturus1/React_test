import { useContext } from "react";
import { ThemeContext } from "./Context"

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) { throw new Error('useThemeContext must be within ThemeContext.Povider') }

    return context;
} 
