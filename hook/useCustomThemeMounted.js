import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

export const useCustomThemeMounted = () => {
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        if (theme) {
            setTheme(theme);
        } else {
            setTheme('dark');
        }
        setMounted(true);

    }, [setMounted, theme, setTheme])

    return {
        theme,
        mounted,
        setTheme
    }
}
