import { StyleSheet } from "react-native";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { COLOR } from "../../constant/Color";


const StyleItemSelectedAddress = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(3),
        right: WIDTH(2),
        marginBottom: HEIGHT(2)
    },
    imageheader: {
        width: WIDTH(10),
        height: HEIGHT(4.5),
        resizeMode: 'contain'
    },
    viewheader: {
        width: WIDTH(87),
        height: HEIGHT(6),
        backgroundColor: COLOR.SKINBLAND,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: HEIGHT(2),
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(5),
        paddingHorizontal: WIDTH(2)
    },
    viewtextheader: {
    },
    textheader: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.BLACK
    },
    textdetail: {
        fontSize: FONTSIZE(1.5),
        color: COLOR.BLACK
    },
    checkbox: {
        width: WIDTH(10),
        top: HEIGHT(1),
    },
    viewdone: {
        width: WIDTH(85),
        height: HEIGHT(6),
        backgroundColor: COLOR.ORANGE1,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: HEIGHT(73),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textdone: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.WHITE
    },
});

export { StyleItemSelectedAddress };


