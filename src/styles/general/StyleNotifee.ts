import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Color";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { FONTSTYLE } from "../../constant/Fonts";

const StyleNotifee = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
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
        marginLeft: WIDTH(31.5)
    },
    iconBell: {
        width: WIDTH(6),
        height: HEIGHT(2.7),
        tintColor: COLOR.BLACK
    },
    handlecheck: {
        marginLeft: 'auto',
        right: WIDTH(3),
    }
});


export default StyleNotifee;