import React, { createContext, useContext, FC, ReactNode} from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './Theme';

const ThemeContext = createContext(lightTheme);

interface ChildrenAndThemeProps {
    children: ReactNode;
    theme: String;
}

export const ThemeProvider: FC<ChildrenAndThemeProps> = ({children, theme = 'light'}) => {
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={selectedTheme}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);