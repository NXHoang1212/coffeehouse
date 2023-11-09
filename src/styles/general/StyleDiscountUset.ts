import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Color";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { FONTSTYLE } from "../../constant/Fonts";

const StyleDiscountUser = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYBLAND1
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(5.8),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 0.5,
    },
    iconBack: {
        marginLeft: WIDTH(3),
        width: WIDTH(5),
        height: HEIGHT(3),
    },
    textHeader: {
        fontSize: FONTSIZE(2.4),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        marginLeft: WIDTH(20)
    },
    viewbody: {
        flex: 1,
        marginTop: HEIGHT(2),
        marginHorizontal: WIDTH(3),
        paddingBottom: HEIGHT(2),
    },
    textbody: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        marginBottom: HEIGHT(1.2)
    },
});


export default StyleDiscountUser;