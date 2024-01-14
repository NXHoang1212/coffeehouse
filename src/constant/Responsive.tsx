import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const HEIGHT = (height: number) => responsiveScreenHeight(height);
export const WIDTH = (width: number) => responsiveScreenWidth(width);
export const FONTSIZE = (fontSize: number) => responsiveScreenFontSize(fontSize);