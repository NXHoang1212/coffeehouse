import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleDetailHistoryOrderReject = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
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
        height: HEIGHT(93),
        elevation: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: HEIGHT(1.3),
    },
    textitle: {
        fontSize: FONTSIZE(2.1),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    iconcancel: {
        width: WIDTH(3.4),
        height: WIDTH(3.4),
        resizeMode: 'contain',
        tintColor: COLOR.GRAY,
        left: WIDTH(23),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.06),
        backgroundColor: COLOR.GRAY,
        top: HEIGHT(2.3),
    },
    body: {},
});

export default StyleDetailHistoryOrderReject;
