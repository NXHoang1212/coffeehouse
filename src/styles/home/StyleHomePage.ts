import { StyleSheet } from 'react-native';
import { HEIGHT, WIDTH, FONTSIZE } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';

const StyleHomePage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.SKIN,
    },
    viewheader: {
        marginLeft: WIDTH(3),
        flexDirection: 'row',
        alignItems: 'center',
        height: HEIGHT(6),
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(3.8),
    },
    icon: {
        width: WIDTH(3.3),
        height: HEIGHT(3.3),
    },
    textheader: {
        fontSize: FONTSIZE(1.8),
        fontFamily: FONTSTYLE.MEDIUM,
        color: COLOR.BLACK,
    },
    headerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(2.5),
        marginLeft: 'auto',
        right: WIDTH(2),
    },
    viewpromo: {
        width: WIDTH(13),
        height: HEIGHT(3.5),
        backgroundColor: COLOR.WHITE,
        borderRadius: WIDTH(5),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row',
        gap: WIDTH(2.2),
    },
    viewbell: {
        width: WIDTH(8.8),
        height: HEIGHT(3.8),
        backgroundColor: COLOR.WHITE,
        borderRadius: WIDTH(10),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    iconpromo: {
        width: WIDTH(5.3),
        height: HEIGHT(2.8),
        tintColor: COLOR.ORANGEBOLD,
    },
    textpromo: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontWeight: 'bold'
    },
    iconbell: {
        width: WIDTH(3.5),
        height: HEIGHT(2.3),
    },
    viewbody: {
        height: HEIGHT(25),
    },
    viewbodycard: {
        width: WIDTH(92),
        height: HEIGHT(22),
        backgroundColor: COLOR.ORANGE,
        alignSelf: 'center',
        borderRadius: WIDTH(5),
        top: HEIGHT(2),
        zIndex: 1,
    },
    viewtextcard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: HEIGHT(2.5),
        gap: HEIGHT(0.9),
    },
    texttitlecard: {
        fontSize: FONTSIZE(2.3),
        fontFamily: FONTSTYLE.SEMIBOLD,
        color: COLOR.BLACK,
    },
    textcard: {
        fontSize: FONTSIZE(1.8),
        fontFamily: FONTSTYLE.REGULAR,
        color: COLOR.BLACK,
        textAlign: 'center',
    },
    viewlogincard: {
        width: WIDTH(50),
        height: HEIGHT(4.5),
        backgroundColor: COLOR.ORANGE,
        alignSelf: 'center',
        borderRadius: WIDTH(2),
        justifyContent: 'center',
        alignItems: 'center',
        top: HEIGHT(2),
        zIndex: 1,
    },
    textlogincard: {
        fontSize: FONTSIZE(1.8),
        fontFamily: FONTSTYLE.BOLD,
        color: COLOR.WHITE,
    },
    iconpoints: {
        position: 'absolute',
        width: WIDTH(53),
        height: HEIGHT(28),
        left: WIDTH(38.8),
    },
    viewimagecard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT(5),
    },
    imagecard: {
        width: WIDTH(95),
        height: HEIGHT(45),
        resizeMode: 'cover',
    },
    viewbottom: {
        backgroundColor: COLOR.WHITE,
        // width: WIDTH(100),
        height: HEIGHT(100),
        bottom: HEIGHT(55),
        elevation: 10,
        borderTopLeftRadius: WIDTH(3),
        borderTopRightRadius: WIDTH(3),
    },
    line: {
        width: WIDTH(10),
        height: HEIGHT(0.7),
        backgroundColor: COLOR.GRAY,
        alignSelf: 'center',
        borderRadius: WIDTH(5),
        marginTop: HEIGHT(0.8),
    }
});

export default StyleHomePage;