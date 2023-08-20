import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../../constant/Responsive';
import { FONTSTYLE } from '../../../constant/Fonts';

const StyleEditAddress = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(5.5),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 0.5,
    },
    iconBack: {
        marginLeft: WIDTH(3),
        width: WIDTH(4),
        height: HEIGHT(2.5),
    },
    textHeader: {
        fontSize: FONTSIZE(2.3),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        marginLeft: WIDTH(24)
    }
});

export default StyleEditAddress;