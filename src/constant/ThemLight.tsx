import { StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const ThemLightStatusBar = (style: 'dark-content' | 'light-content', color: string) => {
  useFocusEffect(() => {
    StatusBar.setBarStyle(style);
    StatusBar.setBackgroundColor(color);
  });
};
