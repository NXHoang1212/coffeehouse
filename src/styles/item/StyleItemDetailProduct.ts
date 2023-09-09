import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemDetailProduct = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewbody: {
        flexDirection: 'column',
        gap: WIDTH(3),
    },
    viewimage: {
        marginBottom: HEIGHT(1),
    },
    imageproduct: {
        width: WIDTH(100),
        height: HEIGHT(40),
        resizeMode: 'center',
    },
    viewback: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: WIDTH(3),
    },
    iconback: {
        width: WIDTH(7),
        height: HEIGHT(3.2),
        position: 'absolute',
        bottom: HEIGHT(35),
    },
    viewtext: {
        paddingHorizontal: WIDTH(2),
        flexDirection: 'column',
        gap: WIDTH(1.5),
        marginBottom: HEIGHT(1),
    },
    textname: {
        fontSize: FONTSIZE(2.4),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    iconheart: {
        width: WIDTH(5.2),
        height: HEIGHT(2.1),
        tintColor: COLOR.BLACK,
        right: WIDTH(2),
        bottom: HEIGHT(0.5),
    },
    viewprice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textprice: {
        fontSize: FONTSIZE(1.9),
        fontWeight: 'bold',
        color: COLOR.GRAY,
        letterSpacing: WIDTH(0.1),
    },
    textdescription: {
        width: WIDTH(95),
        textAlign: 'justify',
        fontSize: FONTSIZE(1.9),
        fontWeight: 'normal',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    textshowmore: {
        fontSize: FONTSIZE(1.9),
        fontWeight: '500',
        color: COLOR.ORANGE,
        letterSpacing: WIDTH(0.1),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(1),
        backgroundColor: COLOR.GRAYBLAND1,
        alignSelf: 'center',
    },
    lineitem: {
        width: WIDTH(99),
        height: 1,
        backgroundColor: COLOR.GRAYLINE,
    },
    viewsize: {
        paddingHorizontal: WIDTH(2)
    },
    textsize: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    textminisize: {
        fontSize: FONTSIZE(1.9),
        fontWeight: 'normal',
        color: COLOR.GRAY,
        letterSpacing: WIDTH(0.1),
    },
    viewsizearray: {
        flexDirection: 'column',
        gap: WIDTH(0.5),
        marginTop: HEIGHT(1),
    },
    viewcheckitem: {
        flexDirection: 'row',
        alignItems: 'center',
        right: WIDTH(5),
    },
    viewsizename: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textsizename: {
        fontSize: FONTSIZE(1.9),
        fontWeight: '400',
        fontStyle: 'normal',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
        width: WIDTH(69),
        right: WIDTH(4),
    },
    textsizeprice: {
        fontSize: FONTSIZE(1.9),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
        marginLeft: 'auto',
    },
    viewquantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: WIDTH(3),

    },
    viewminus: {
        width: WIDTH(8),
        height: HEIGHT(3.5),
        borderRadius: WIDTH(5),
        backgroundColor: COLOR.SKIN,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0.5,
    },
    viewplus: {
        width: WIDTH(8),
        height: HEIGHT(3.5),
        borderRadius: WIDTH(5),
        backgroundColor: COLOR.SKIN,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0.5,
    },
    viewnote: {
        paddingHorizontal: WIDTH(2),
        flexDirection: 'column',
        gap: WIDTH(2),
        marginBottom: HEIGHT(1),
    },
    textnote: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    textmininote: {
        fontSize: FONTSIZE(1.9),
        fontWeight: 'normal',
        color: COLOR.GRAY,
        letterSpacing: WIDTH(0.1),
    },
    inputnote: {
        width: WIDTH(95),
        height: HEIGHT(5),
        borderRadius: WIDTH(2),
        backgroundColor: COLOR.GRAYBLAND1,
        paddingHorizontal: WIDTH(2),
        paddingVertical: HEIGHT(1),
        fontSize: FONTSIZE(1.9),
        fontWeight: 'normal',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    viewbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: WIDTH(3),
        borderTopWidth: WIDTH(0.3),
        borderTopColor: COLOR.GRAYBLAND,
        paddingTop: HEIGHT(0.2),
        backgroundColor: COLOR.WHITE,
        height: HEIGHT(7),
    },
    iconminus: {
        tintColor: COLOR.ORANGE,
        width: WIDTH(3),
    },
    textnumber: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    iconplus: {
        tintColor: COLOR.ORANGE,
    },
    button: {
        flexDirection: 'row',
        gap: WIDTH(2),
        width: WIDTH(55),
        height: HEIGHT(5),
        borderRadius: WIDTH(3),
        backgroundColor: COLOR.ORANGEBOLD,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbutton: {
        fontSize: FONTSIZE(1.9),
        fontWeight: 'bold',
        color: COLOR.WHITE,
        letterSpacing: WIDTH(0.1),
    },
});


export default StyleItemDetailProduct;