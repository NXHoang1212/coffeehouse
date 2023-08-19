import { StyleSheet } from 'react-native';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';

const StylePromoDiscount = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYBLAND1,
    },
    viewheader: {
        width: WIDTH(100),
        height: HEIGHT(29),
        alignSelf: 'center',
        backgroundColor: COLOR.ORANGE,
    },
    viewtextheader: {
        flexDirection: 'column',
        left: WIDTH(2),
    },
    textsubheader: {
        fontSize: FONTSIZE(2.9),
        color: COLOR.WHITE,
        fontWeight: 'bold',
        marginRight: 'auto',
        top: HEIGHT(2),
        left: WIDTH(4),
    },
    textbean: {
        fontSize: FONTSIZE(2),
        color: COLOR.WHITE,
        marginRight: 'auto',
        fontWeight: '500',
        top: HEIGHT(2),
        left: WIDTH(1),
    },
    textheader: {
        fontSize: FONTSIZE(2.9),
        color: COLOR.WHITE,
        fontWeight: '500',
        textAlign: 'center',
        marginRight: 'auto',
        top: HEIGHT(2),
    },
    iconpoints: {
        width: WIDTH(50),
        height: WIDTH(55),
        position: 'absolute',
        left: WIDTH(49.8),
    },
    viewvoucher: {
        width: WIDTH(50),
        height: HEIGHT(3.8),
        backgroundColor: COLOR.WHITE,
        borderRadius: 15,
        marginTop: HEIGHT(2),
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: WIDTH(2),
        bottom: HEIGHT(6.5),
        marginLeft: 'auto',
        right: WIDTH(3),
        zIndex: 1,
    },
    iconvoucher: {
        width: WIDTH(5),
        height: WIDTH(5),
        tintColor: COLOR.ORANGE,
    },
    textvoucher: {
        fontSize: FONTSIZE(2.1),
        color: COLOR.ORANGE,
        fontWeight: 'bold',
    },
    viewbarcode: {
        width: WIDTH(92),
        height: HEIGHT(11),
        backgroundColor: COLOR.WHITE,
        alignSelf: 'center',
        borderRadius: WIDTH(3),
    },
    body: {},
    viewservice: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: HEIGHT(2),
        marginBottom: HEIGHT(2),
    },
    viewmember: {
        width: WIDTH(45),
        height: HEIGHT(11),
        backgroundColor: COLOR.WHITE,
        borderRadius: WIDTH(4),
        elevation: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        gap: HEIGHT(1.3),
    },
    iconking: {
        width: WIDTH(6),
        height: WIDTH(5),
        tintColor: COLOR.ORANGEBOLD,
        left: WIDTH(4),
    },
    iconchangebean: {
        width: WIDTH(6),
        height: WIDTH(5),
        tintColor: COLOR.RED,
        left: WIDTH(4),
    },
    textservice: {
        fontSize: FONTSIZE(2.1),
        color: COLOR.BLACK,
        fontWeight: '500',
        left: WIDTH(4),
    },
    iconbeanhistory: {
        width: WIDTH(5),
        height: WIDTH(5),
        tintColor: COLOR.ORANGEBOLD,
        left: WIDTH(4),
    },
    iconsercurity: {
        width: WIDTH(4.5),
        height: WIDTH(5),
        tintColor: COLOR.BLUE,
        left: WIDTH(4),
    },
    viewpromocode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: WIDTH(4),
        top: HEIGHT(2),
    },
    textpromocode: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        top: HEIGHT(0.3),
        letterSpacing: WIDTH(0.1),
    },
    viewseeall: {
        width: WIDTH(22),
        height: HEIGHT(3.5),
        backgroundColor: COLOR.SKIN,
        borderRadius: WIDTH(3),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
    },
    textseeallpromocode: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.RED,
        fontWeight: 'bold',
    }
});


export default StylePromoDiscount;