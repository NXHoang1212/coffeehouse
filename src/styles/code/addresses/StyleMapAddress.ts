import { WIDTH, HEIGHT, FONTSIZE } from '../../../constant/Responsive'
import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constant/Color';


export const StyleMapAddress = StyleSheet.create({
    contatiner: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: HEIGHT(3),
        marginHorizontal: WIDTH(3),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.05),
        backgroundColor: COLOR.BLACK,
        alignSelf: 'center',
        marginTop: HEIGHT(1),
    },
    textheader: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        fontWeight: '600',
        letterSpacing: WIDTH(0.1),
    },
    viewbody: {

    },
    containermap: {
        width: WIDTH(100),
        height: HEIGHT(100),
        alignSelf: 'center',
    },
    viewlocation: {
        position: 'absolute',
        zIndex: 1,
        top: HEIGHT(48),
        left: WIDTH(85),
        width: WIDTH(11),
        height: HEIGHT(5.2),
        backgroundColor: COLOR.WHITE,
        borderRadius: WIDTH(2),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    viewinfo: {
        width: WIDTH(100),
        height: HEIGHT(50),
        backgroundColor: COLOR.WHITE,
        position: 'absolute',
        top: HEIGHT(55),
        paddingHorizontal: WIDTH(3),
    },
    viewiconmap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: WIDTH(2),
    },
    iconmap: {
        width: WIDTH(6),
        height: HEIGHT(2.5),
    },
    viewtextmap: {
        flexDirection: 'column',
        marginLeft: WIDTH(2),
    },
    textinfo: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
        fontWeight: '600',
        letterSpacing: WIDTH(0.1),
        width: WIDTH(95),
    },
    textname: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.GRAY,
        fontWeight: '600',
        letterSpacing: WIDTH(0.1),
        width: WIDTH(85),
    },
    viewmap: {
        flexDirection: 'column',
        gap: WIDTH(2),
    },
    linemap: {
        width: WIDTH(100),
        height: HEIGHT(0.05),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'flex-end',
    },
    modalcontainer: {
        width: WIDTH(95),
        height: HEIGHT(36),
        borderRadius: 15,
        backgroundColor: COLOR.WHITE,
        paddingHorizontal: WIDTH(3),
        alignSelf: 'center',
        elevation: 10,
    },
    textmodalname: {
        fontSize: FONTSIZE(2.2),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    textmodalconfimr: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        fontWeight: '400',
        textAlign: 'center',
        width: WIDTH(60),
    },
    picker: {
        width: WIDTH(90),
        alignSelf: 'center',
    },
    textinput: {
        width: WIDTH(90),
        height: HEIGHT(6),
        backgroundColor: COLOR.ORANGE1,
        borderRadius: WIDTH(2),
        paddingHorizontal: WIDTH(2),
        marginTop: HEIGHT(2),
        color: COLOR.WHITE,
        fontSize: FONTSIZE(1.8),
    },
    viewbutton: {
        width: WIDTH(90),
        height: HEIGHT(6),
        backgroundColor: COLOR.GRAYLINE,
        borderRadius: WIDTH(4),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top: HEIGHT(5),
    },
    textbutton: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.WHITE,
        fontWeight: '700',
        letterSpacing: WIDTH(0.1),
    },
})


