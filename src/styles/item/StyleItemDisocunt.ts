import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Color";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { FONTSTYLE } from "../../constant/Fonts";

const StyleItemDiscount = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: HEIGHT(3),
    },
    imagebackground: {
        width: WIDTH(93),
        height: HEIGHT(11),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    transparentItem: {
        position: 'absolute',
        flexDirection: 'row',
        width: WIDTH(50),
        gap: WIDTH(9),
        alignItems: 'center',
    },
    viewimage: {
        width: WIDTH(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: WIDTH(17),
        height: HEIGHT(10),
    },
    viewtext: {
        flexDirection: 'column',
        gap: HEIGHT(2),
    },
    textTitle: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontWeight: '400',
        letterSpacing: 0.1,
    },
    textTime: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontWeight: '400',
    },
});


export default StyleItemDiscount;