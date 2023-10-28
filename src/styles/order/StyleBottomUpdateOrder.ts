import { StyleSheet } from "react-native";
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { FONTSTYLE } from "../../constant/Fonts";


const StyleBottomUpdateOrder = StyleSheet.create({
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
        height: HEIGHT(65),
        elevation: 8,
    },
    itemcontainer: {

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: HEIGHT(2),
    },
    texttitle: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
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
        height: HEIGHT(1.3),
        backgroundColor: COLOR.GRAYBLAND1,
        borderWidth: 0.2,
        borderColor: COLOR.GRAYLINE,
        marginTop: HEIGHT(3.5),
    },
    lineitem: {
        width: WIDTH(100),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.GRAYBLAND1,
        borderWidth: 0.2,
        borderColor: COLOR.GRAYLINE,
    },
    body: {
        top: HEIGHT(1),
        flexDirection: 'column',
        gap: HEIGHT(1),
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
        bottom: HEIGHT(14.1),
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
    viewtotal: {},
    texttotal: {},
    texttotalprice: {},

});

export default StyleBottomUpdateOrder;