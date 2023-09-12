import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemGetAddress = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewbody: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: WIDTH(5),
    },
    iconAddress: {
        width: WIDTH(5),
        height: WIDTH(4),
    },
    viewitemtext: {
        left: WIDTH(1),
    },
    textName: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.BLACK,
        fontWeight: '600',
        fontStyle: 'normal',
    },
    viewuser: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(1),
    },
    textDescribeAddRess: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontFamily: '400',
        width: WIDTH(85),
    },
    textAddress: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontFamily: '400',
        fontWeight: 'normal',
    },
    textPhone: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontFamily: '400',
        fontWeight: 'normal',
    },
    iconEdit: {
        width: WIDTH(4),
        height: WIDTH(4),
        tintColor: COLOR.ORANGE,
    },
});


export default StyleItemGetAddress;