import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemProduct = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewitemproduct: {
        left: WIDTH(4),
    },
    textnamecategories: {
        fontSize: FONTSIZE(2),
        fontWeight: '600',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.2),
    },

});


export default StyleItemProduct;