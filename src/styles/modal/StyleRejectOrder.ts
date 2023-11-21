import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';

const StyleRejectOrder = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: COLOR.BLACKTRANSPARENT,
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        bottom: 0,
        backgroundColor: COLOR.WHITE,
        borderTopLeftRadius: WIDTH(5),
        borderTopRightRadius: WIDTH(5),
        height: HEIGHT(58),
        elevation: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: HEIGHT(2),
    },
    texttitle: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(2.1),
        fontWeight: 'bold',
    },
    iconcancel: {
        width: WIDTH(3),
        height: WIDTH(3),
        tintColor: COLOR.GRAYBLAND,
        left: WIDTH(28),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.GRAYBLAND,
        marginTop: HEIGHT(1.5),
        alignSelf: 'center',
    },
    body: {
        marginTop: HEIGHT(2),
        paddingHorizontal: WIDTH(3),
    },
    textbody: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
        fontWeight: 'bold',
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLOR.WHITE,
        right: WIDTH(4),
    },
    textcheckbox: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
        fontWeight: 'bold',
        marginLeft: WIDTH(2),
    },
    lineitem: {
        width: WIDTH(95),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
    },
    viewpolicy: {
        top: HEIGHT(0.5),
    },
    textpolicy: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.6),
        fontWeight: '700',
        textAlign: 'center',
    },
    viewbutton: {
        width: WIDTH(90),
        height: HEIGHT(5),
        backgroundColor: COLOR.ORANGE,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: WIDTH(2),
    },
    textreject: {
        color: COLOR.WHITE,
        fontSize: FONTSIZE(1.9),
        fontWeight: 'bold',
    },
});


export default StyleRejectOrder;
