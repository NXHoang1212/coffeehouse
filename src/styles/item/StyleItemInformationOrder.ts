import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemInformationOrder = StyleSheet.create({
    container: {
        backgroundColor: COLOR.WHITE,
    },
    header: {
        marginTop: HEIGHT(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: WIDTH(3),
    },
    texttilte: {
        fontSize: FONTSIZE(2),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewdelete: {
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
        marginHorizontal: WIDTH(3),
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
        width: WIDTH(88),
    },
    vieweditaddress: {

    },
    iconedit: {
        width: WIDTH(5),
        height: WIDTH(5),
        tintColor: COLOR.ORANGE,
    },
    textinput: {
        width: WIDTH(94),
        height: WIDTH(10),
        borderWidth: 1,
        borderColor: COLOR.GRAY,
        borderRadius: WIDTH(3),
        marginTop: HEIGHT(1),
        paddingHorizontal: WIDTH(3),
        left: WIDTH(2),
    },
    itemuser: {
        marginTop: HEIGHT(2),
        marginHorizontal: WIDTH(3),
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(5),
    },
    textuser: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '500',
        color: COLOR.BLACKTRANSPARENT,
    },
    textline: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewline: {
        width: HEIGHT(0.2),
        height: WIDTH(13),
        backgroundColor: COLOR.GRAYBLAND,
    },
    linespace: {
        width: WIDTH(100),
        height: HEIGHT(2),
        backgroundColor: COLOR.GRAYBLAND1,
        alignSelf: 'center',
        marginTop: HEIGHT(2),
    },
    viewlineprogess: {
        width: WIDTH(88.5),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'flex-end',

    },
    viewlinetotalprogess: {
        width: WIDTH(97),
        height: HEIGHT(0.05),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'flex-end',
        top: HEIGHT(1),
        marginBottom: HEIGHT(2),
    },
    viewitemproduct: {
        flexDirection: 'column',
        gap: HEIGHT(1.5),
    },
    viewproduct: {

    },
    viewheaderproduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: WIDTH(3),
        marginBottom: HEIGHT(1),
    },
    textheaderchoose: {
        fontSize: FONTSIZE(2.1),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewtouchplus: {
        width: WIDTH(20),
        height: WIDTH(7.5),
        borderRadius: WIDTH(5),
        backgroundColor: COLOR.SKINBLAND,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: WIDTH(1),
        top: HEIGHT(0.3),
    },
    textheaderproduct: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.ORANGE
    },
    iconplus: {
        width: WIDTH(2.8),
        height: WIDTH(2.8),
        tintColor: COLOR.ORANGE,
    },
    itemproduct: {
        marginHorizontal: WIDTH(3),
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(4),
        marginBottom: HEIGHT(1),
    },
    textnameproduct: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    textsizeproduct: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '500',
        color: COLOR.BLACKTRANSPARENT,
    },
    texttoppingproduct: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '500',
        color: COLOR.BLACKTRANSPARENT,
    },
    viewpriceproduct: {
        marginLeft: 'auto'
    },
    textpriceproduct: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewitemswipe: {
        flexDirection: 'row',
    },
    viewswipeedit: {
        width: WIDTH(15),
        backgroundColor: COLOR.GRAYBLAND,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewswipedelete: {
        width: WIDTH(15),
        backgroundColor: COLOR.RED,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icondelete: {
        width: WIDTH(6),
        height: WIDTH(6),
        tintColor: COLOR.WHITE,
    },
    viewtotal: {
        marginHorizontal: WIDTH(3),
        marginBottom: HEIGHT(1),
        marginTop: HEIGHT(1),
    },
    texttotal: {
        fontSize: FONTSIZE(2),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    viewtotalprice: {
        marginHorizontal: WIDTH(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewtotalshipper: {
        marginHorizontal: WIDTH(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewdiscount: {
        marginHorizontal: WIDTH(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewamount: {
        marginHorizontal: WIDTH(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texindex: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '400',
        color: COLOR.BLACK,
    },
    textbutton: {
        fontSize: FONTSIZE(1.7),
        fontWeight: '700',
        color: COLOR.WHITE,
    },
    viewchooseamount: {
        marginHorizontal: WIDTH(3),
        flexDirection: 'column',
        gap: HEIGHT(1),
        marginTop: HEIGHT(1),
        marginBottom: HEIGHT(2),
    },
    viewmethod: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(3),
    },
    iconmethod: {
        width: WIDTH(7),
        height: WIDTH(7),
    },
    textamount: {
        fontSize: FONTSIZE(1.9),
        fontWeight: '700',
        color: COLOR.BLACK,
    },
    textmethod: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '400',
        color: COLOR.BLACK,
    },
    iconright: {
        width: WIDTH(4),
        height: WIDTH(4),
        marginLeft: 'auto',
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(8),
        backgroundColor: COLOR.SKINBLAND,
        paddingHorizontal: WIDTH(3),
        borderTopLeftRadius: WIDTH(3),
        borderTopRightRadius: WIDTH(3),
    },
    vieworder: {
        width: WIDTH(25),
        height: HEIGHT(4),
        backgroundColor: COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: WIDTH(10),
    },
    textorder: {
        fontSize: FONTSIZE(1.8),
        fontWeight: '700',
        color: COLOR.ORANGE,
    },
});


export default StyleItemInformationOrder;


