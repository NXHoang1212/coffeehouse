import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';


const StyleContacFeedBack = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.GRAYBLAND1,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(6),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 0.5,
    },
    iconBack: {
        marginLeft: WIDTH(3),
        width: WIDTH(5),
        height: HEIGHT(3),
    },
    textHeader: {
        fontSize: FONTSIZE(2.4),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        marginLeft: WIDTH(22)
    },
    viewcontact: {
        top: HEIGHT(3),
        flexDirection: 'column',
    },
    viewcontactitem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH(100),
        height: HEIGHT(39),
        gap: HEIGHT(1.5),
        backgroundColor: COLOR.WHITE,
    },
    handlecontact: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        gap: WIDTH(1),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.5),
        backgroundColor: COLOR.GRAYBLAND1,
    },
    iconContact: {
        marginLeft: WIDTH(3),
    },
    iconweb: {
        marginLeft: WIDTH(3),
        width: WIDTH(6),
        height: HEIGHT(2.8),
    },
    viewtextcontact: {},
    textContact: {
        fontSize: FONTSIZE(1.8),
        color: COLOR.BLACK,
        left: WIDTH(3),
    },
    iconright: {
        marginLeft: 'auto',
        right: WIDTH(2),
    },
});

export default StyleContacFeedBack;