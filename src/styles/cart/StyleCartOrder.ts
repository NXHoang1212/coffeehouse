import { StyleSheet } from "react-native";
import { COLOR } from '../../constant/Color';
import { HEIGHT, WIDTH, FONTSIZE } from "../../constant/Responsive";


const styleCartOrder = StyleSheet.create({
    containernoitem: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: HEIGHT(2)
    },
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYBLAND1
    },
    iconnoitem: {
        width: WIDTH(15),
        height: HEIGHT(7),
    },
    viewbacknoorder: {

    },
    textbacknoorder: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.ORANGE,
        width: WIDTH(90),
        textAlign: 'center',
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.WHITE,
        height: HEIGHT(6),
        borderBottomWidth: 0.5,
        borderBottomColor: COLOR.GRAY,
    },
    textheader: {
        fontSize: FONTSIZE(2.3),
        fontWeight: 'bold',
        color: COLOR.ORANGE,
        left: WIDTH(3)
    },
    iconpromo: {
        width: WIDTH(6),
        height: HEIGHT(2),
        tintColor: COLOR.ORANGE,
    },
    iconnotify: {
        width: WIDTH(5),
        height: HEIGHT(2.3),
        tintColor: COLOR.BLACK,
    },
    viewpromo: {
        width: WIDTH(12),
        height: HEIGHT(3.5),
        backgroundColor: COLOR.WHITE,
        elevation: 10,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        left: WIDTH(13)
    },
    viewnotify: {
        width: WIDTH(8.5),
        height: HEIGHT(3.3),
        backgroundColor: COLOR.WHITE,
        elevation: 10,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        right: WIDTH(4)
    },
    viewbody: {
        marginTop: HEIGHT(1.2),
        backgroundColor: COLOR.WHITE,
        height: HEIGHT(100),
    },
});

export default styleCartOrder;