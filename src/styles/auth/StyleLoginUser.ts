import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Color";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";


const StyleLoginUser = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
    },
    viewbackground: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(35),
    },
    background: {
        width: WIDTH(100),
        height: HEIGHT(35),
    },
    viewhandle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        elevation: 10,
        borderTopLeftRadius: WIDTH(3),
        borderTopRightRadius: WIDTH(3),
    },
    viewwellcome: {
        marginTop: HEIGHT(3),
        alignItems: 'center',
    },
    textwellcome: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.BLACK,
        fontWeight: '400',
    },
    logo: {
        tintColor: COLOR.BLACK,
        width: WIDTH(55),
        height: HEIGHT(2),
        resizeMode: 'contain',
        marginTop: HEIGHT(1.5),
    },
    viewinput: {
        top: HEIGHT(3),
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(88),
        height: HEIGHT(5.9),
        borderWidth: WIDTH(0.4),
        borderRadius: WIDTH(3),
        borderColor: COLOR.GRAYBLAND,
        gap: WIDTH(2.5),
        marginBottom: HEIGHT(5.2),
    },
    textinput: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        fontWeight: '400',
    },
    input: {
        width: WIDTH(60),
        height: HEIGHT(6),
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontWeight: '400'
    },
    iconvietnam: {
        width: WIDTH(5),
        height: HEIGHT(2.5),
        resizeMode: 'contain',
        marginLeft: WIDTH(5),
    },
    viewline: {
        height: HEIGHT(3),
        borderWidth: WIDTH(0.2),
        borderColor: COLOR.GRAY,
    },
    iconcancel: {
        width: WIDTH(10),
        height: HEIGHT(3.3),
        resizeMode: 'contain',
        right: WIDTH(12),
        bottom: HEIGHT(14),
    },
    continue: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(1.5),
    },
    lineor: {
        width: WIDTH(35),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.GRAY,
    },
    textor: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.GRAY,
        fontWeight: '400',
        marginHorizontal: WIDTH(1),
    },
    viewlogin: {
        width: WIDTH(88),
        height: HEIGHT(6),
        backgroundColor: COLOR.GRAYBLAND,
        marginBottom: HEIGHT(4),
        borderRadius: WIDTH(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textlogin: {
        fontSize: FONTSIZE(2),
        color: COLOR.WHITE,
        fontWeight: '400',
    },
});


export default StyleLoginUser;