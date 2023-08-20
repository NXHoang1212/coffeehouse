import { StyleSheet } from "react-native";
import { COLOR } from "../../../constant/Color";
import { FONTSIZE, HEIGHT, WIDTH } from "../../../constant/Responsive";


const StyleSetting = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYBLAND1
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(6),
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
        marginLeft: WIDTH(32)
    },
    body: {},
    viewgeneral: {
        top: HEIGHT(2),
        width: WIDTH(95),
        height: HEIGHT(23),
        backgroundColor: COLOR.WHITE,
        elevation: 5,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: HEIGHT(2),
    },
    handlegeneral: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconGeneral: {
        width: WIDTH(4.9),
        height: HEIGHT(2.7),
        marginLeft: WIDTH(3),
    },
    icontoggle: {
        marginLeft: 'auto',
        right: WIDTH(4),
    },
    iconright: {
        width: WIDTH(3),
        height: HEIGHT(2),
        marginLeft: 'auto',
        right: WIDTH(4),
    },
    textGeneral: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.BLACK,
        marginLeft: WIDTH(3),
        fontWeight: '500',
    },
    line: {
        width: WIDTH(90),
        height: HEIGHT(0.3),
        backgroundColor: COLOR.GRAYBLAND1,
        alignSelf: 'center',
    },
});


export default StyleSetting;