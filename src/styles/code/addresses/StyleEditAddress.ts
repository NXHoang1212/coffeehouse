import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../../constant/Responsive';
import { FONTSTYLE } from '../../../constant/Fonts';

const StyleEditAddress = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYBLAND1,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(5),
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
        marginLeft: WIDTH(23)
    },
    body: {
        top: HEIGHT(1),
    },
    viewbody1: {
        width: WIDTH(100),
        height: HEIGHT(45),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 0.5,
        flexDirection: 'column',
        gap: HEIGHT(0.6),
    },
    viewbody2: {
        width: WIDTH(100),
        height: HEIGHT(19),
        backgroundColor: COLOR.WHITE,
        flexDirection: 'column',
        gap: HEIGHT(1),
        top: HEIGHT(0.9),
    },
    viewbody3: {
        width: WIDTH(100),
        height: HEIGHT(6.8),
        backgroundColor: COLOR.WHITE,
        top: HEIGHT(2),
    },
    viewhome: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: WIDTH(2),
        top: HEIGHT(1),
    },
    viewdelete: {
        flexDirection: 'row',
        marginHorizontal: WIDTH(2),
        top: HEIGHT(2),
        left: WIDTH(4),
    },
    textTitle: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.GRAY,
        fontWeight: '500',
        left: WIDTH(3.5),
        marginBottom: HEIGHT(0.5),
    },
    textdelete: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.RED,
        fontWeight: '500',
        left: WIDTH(3.5),
        marginBottom: HEIGHT(0.5),
    },
    viewtexthome: {
        width: WIDTH(90),
        height: HEIGHT(5),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },
    viewtextinput: {
        width: WIDTH(90),
        height: HEIGHT(5),
        borderWidth: 1,
        borderColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewinput: {
        width: WIDTH(90),
        height: HEIGHT(5),
        borderWidth: 1,
        borderColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
        borderRadius: 10,
    },
    texthome: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.BLACK,
        fontWeight: '500',
        left: WIDTH(3),
        letterSpacing: 0.5
    },
    textinput: {
        fontSize: FONTSIZE(1.9),
        color: COLOR.GRAY,
        fontWeight: '600',
        left: WIDTH(2),
        letterSpacing: 0.5,
        width: WIDTH(80),
    },
    iconArrow: {
        marginLeft: 'auto',
        right: WIDTH(4),
        width: WIDTH(2.8),
        height: HEIGHT(2.5),
    },
    icondelete: {
        width: WIDTH(3.5),
        height: HEIGHT(2.5),
        tintColor: COLOR.RED,
    },
    viewbutton: {
        width: WIDTH(93),
        height: HEIGHT(5.5),
        backgroundColor: COLOR.GRAYBLAND,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: HEIGHT(6),
    },
    textbutton: {
        fontSize: FONTSIZE(2.2),
        color: COLOR.WHITE,
        fontWeight: 'bold',
    },
});

export default StyleEditAddress;