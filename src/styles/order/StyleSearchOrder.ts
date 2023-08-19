import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Color";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { FONTSTYLE } from "../../constant/Fonts";


const StyleSearchOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
    },
    viewheader: {
        top: HEIGHT(2.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    viewsearch: {
        width: WIDTH(86),
        height: HEIGHT(5.5),
        borderRadius: 10,
        backgroundColor: COLOR.GRAYBLAND1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        gap: WIDTH(2),
    },
    viewiconsearch: {
        marginLeft: WIDTH(6),
    },
    iconsearch: {
        tintColor: COLOR.BLACK,
    },
    inputsearch: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        width: WIDTH(63),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.GRAYBLAND1,
        alignSelf: 'center',
        marginTop: HEIGHT(4.5),
    },
    viewcancel: {},
    textcancel: {
        fontSize: FONTSIZE(2),
        color: COLOR.RED,
    },
    iconcancel: {
        width: WIDTH(5),
        height: HEIGHT(2.5),
    },
});


export default StyleSearchOrder;