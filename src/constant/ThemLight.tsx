import { StatusBar } from 'react-native';

export const ThemLightStatusBar = (style: 'dark-content' | 'light-content', color: string) => {
    StatusBar.setBarStyle(style);
    StatusBar.setBackgroundColor(color);
};
