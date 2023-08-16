import { Dimensions, StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';

const StyleBottomSheetHome = StyleSheet.create({
    container: {
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
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
        borderRadius: WIDTH(5),
        marginTop: HEIGHT(0.8),
    },
    vieworder: {
        flexDirection: 'row',
        marginTop: HEIGHT(2),
        width: WIDTH(90),
        height: HEIGHT(13),
        borderColor: COLOR.GRAYBLAND,
        borderWidth: WIDTH(0.25),
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: WIDTH(2),
    },
    viewshipper: {
        justifyContent: 'center',
        alignItems: 'center',
        left: WIDTH(4),
        flexDirection: 'column',
        gap: HEIGHT(0.8),
    },
    imgshipper: {
        width: WIDTH(13),
        height: WIDTH(13),
    },
    textshipper: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontFamily: FONTSTYLE.MEDIUM,
    },
    viewbringship: {
        justifyContent: 'center',
        alignItems: 'center',
        right: WIDTH(4),
        flexDirection: 'column',
        gap: HEIGHT(0.8),
    },
    imgbringship: {
        width: WIDTH(15),
        height: WIDTH(15),
        left: WIDTH(1),
    },
    viewimgbringship: {
        width: WIDTH(13),
        height: WIDTH(13),
        backgroundColor: COLOR.SKIN,
        borderRadius: WIDTH(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbringship: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontFamily: FONTSTYLE.MEDIUM,
    },
    lineship: {
        width: WIDTH(0.2),
        height: HEIGHT(13),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
    },
    viewbanner: {
        height: HEIGHT(28),
        alignSelf: 'center',
    },
});


export default StyleBottomSheetHome;