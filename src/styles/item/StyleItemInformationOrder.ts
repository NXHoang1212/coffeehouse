import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemInformationOrder = StyleSheet.create({
    container: {
        marginHorizontal: WIDTH(3),
    },
    header: {
        marginTop: HEIGHT(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texttilte: {
        fontSize: FONTSIZE(2),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewedit: {
        width: WIDTH(26),
        height: WIDTH(8),
        borderRadius: WIDTH(3),
        backgroundColor: COLOR.SKIN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textedit: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.ORANGE,
    },
    viewaddress: {
        marginTop: HEIGHT(2.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textaddress: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewtextaddress: {

    },
    textnameaddress: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    textdetailaddress: {
        fontSize: FONTSIZE(1.6),
        color: COLOR.BLACK,
    },
    vieweditaddress: {

    },
    iconedit: {
        width: WIDTH(5),
        height: WIDTH(5),
        tintColor: COLOR.ORANGE,
    },
});


export default StyleItemInformationOrder;


