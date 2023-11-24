import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemHistoryOrderProcessing = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
        paddingHorizontal: WIDTH(5),
        marginTop: HEIGHT(1),
    },
    viewbody: {
        flexDirection: 'column',
        gap: WIDTH(3),
    },
    viewtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewtext: {
        flexDirection: 'column',
        gap: HEIGHT(0.25),
    },
    textTitle: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACKTRANSPARENT,
        fontWeight: '500',
    },
    textNameProduct: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.BLACK,
        fontWeight: '500',
    },
    viewdetail: {
        width: WIDTH(25),
        height: HEIGHT(3),
        backgroundColor: COLOR.SKINBLAND,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: WIDTH(3),
        elevation: 5,
    },
    textdetail: {
        fontSize: FONTSIZE(1.75),
        color: COLOR.ORANGE1,
        fontWeight: '700',
    },
    viewimage: {
        alignSelf: 'center',
        backgroundColor: COLOR.SKIN,
        padding: WIDTH(3),
        height: HEIGHT(25),
        top: HEIGHT(1),
        marginBottom: HEIGHT(1.5),
    },
    imagestatus: {
        width: WIDTH(100),
        height: HEIGHT(23),
    },
    viewstatus: {
        flexDirection: 'column',
        gap: HEIGHT(0.25),
        marginTop: HEIGHT(1),
    },
    textime: {
        fontSize: FONTSIZE(1.75),
        color: COLOR.BLACKTRANSPARENT,
        fontWeight: '500',
    },
    textstatus: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.BLACK,
        fontWeight: '800',
    },
});

export default StyleItemHistoryOrderProcessing;
