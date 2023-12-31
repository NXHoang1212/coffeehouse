import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';

const StyleStatusOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH(100),
        height: HEIGHT(4),
        // backgroundColor: COLOR.WHITE,
        borderBottomWidth: 0.5,
    },
    iconBack: {
        width: WIDTH(4),
        height: HEIGHT(2),
        left: WIDTH(19),
        resizeMode: 'contain',
    },
    textHeader: {
        fontSize: FONTSIZE(2.4),
        color: COLOR.BLACK,
        fontWeight: '600',
        left: WIDTH(3.5),
    },
    viewbody: {
    },
});

export default StyleStatusOrder;
