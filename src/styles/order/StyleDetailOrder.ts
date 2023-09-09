import { StyleSheet } from "react-native";
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { FONTSTYLE } from "../../constant/Fonts";


const StyleDetailOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    itemcontainer: {
        height: HEIGHT(300),
        width: WIDTH(100),
    },
});

export default StyleDetailOrder;