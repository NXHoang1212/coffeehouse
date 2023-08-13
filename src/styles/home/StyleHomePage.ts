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
        top: HEIGHT(0.5),
        marginLeft: WIDTH(3),
        flexDirection: 'row',
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
    iconbell: {
        width: WIDTH(3.5),
        height: HEIGHT(2.3),
    },
    viewbanner: {

    },
    banner: {
        width: WIDTH(120),
        height: HEIGHT(50),
        alignSelf: 'center',
        top: HEIGHT(15),
    },
    thecard: {
        width: WIDTH(93),
        height: HEIGHT(21),
        backgroundColor: COLOR.ORANGE,
        borderRadius: WIDTH(5),
        alignSelf: 'center',
        bottom: HEIGHT(45),
    },
    card: {
        width: WIDTH(48),
        height: HEIGHT(20),
        marginLeft: 'auto',
        right: WIDTH(0.5),
        bottom: HEIGHT(11.8),
    },
    viewthecard: {
        flexDirection: 'column',
        alignItems: 'center',
        top: HEIGHT(1),
        alignSelf: 'center',
        gap: HEIGHT(0.5),
    },
    textcardLoginSet: {
        fontSize: FONTSIZE(1.9),
        fontFamily: FONTSTYLE.MEDIUM,
        color: COLOR.WHITE,
    },
    textcard: {
        fontSize: FONTSIZE(1.9),
        fontFamily: FONTSTYLE.MEDIUM,
        color: COLOR.WHITE,
        width: WIDTH(80),
        textAlign: 'center',
    },
    cardLogin: {
        width: WIDTH(39),
        height: HEIGHT(4),
        backgroundColor: COLOR.ORANGEBOLD,
        borderRadius: WIDTH(2),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        top: HEIGHT(1),
    },
    BottomsheetContainer: {
        backgroundColor: COLOR.WHITE,
        borderTopLeftRadius: WIDTH(5),
        borderTopRightRadius: WIDTH(5),
        height: HEIGHT(100),

    },
});

export default StyleHomePage;