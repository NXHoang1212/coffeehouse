import { WIDTH, HEIGHT, FONTSIZE } from '../../../constant/Responsive'
import { COLOR } from '../../../constant/Color'
import { StyleSheet } from 'react-native';


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
        height: HEIGHT(3),
        right: WIDTH(1),
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
    },
    viewmap: {
        flexDirection: 'column',
        gap: WIDTH(2),
    },
    linemap: {
        width: WIDTH(100),
        height: HEIGHT(0.05),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
    },
})


