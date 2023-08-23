import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';


const StyleCreateInformation = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH(100),
        height: HEIGHT(5.5),
        backgroundColor: COLOR.WHITE,
        borderBottomWidth: 0.5,
        marginTop: HEIGHT(5),
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
        marginLeft: WIDTH(28.8)
    },
    viewimg: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: HEIGHT(4),
        left: WIDTH(8),
    },
    iconavatar: {
        width: WIDTH(27),
        height: HEIGHT(12.3),
        borderRadius: WIDTH(13),
    },
    iconcamera: {
        top: HEIGHT(1.5),
        right: WIDTH(9),
    },
    viewinput: {
        marginTop: HEIGHT(4),
        flexDirection: 'column',
        gap: HEIGHT(2),
    },
    input: {
        width: WIDTH(90),
        height: HEIGHT(6),
        borderWidth: 0.9,
        borderRadius: WIDTH(2),
        alignSelf: 'center',
        borderColor: COLOR.GRAY,
    },
    focusedInput: {
        width: WIDTH(90),
        height: HEIGHT(6),
        borderWidth: 1.5,
        borderRadius: WIDTH(2),
        alignSelf: 'center',
        borderColor: COLOR.ORANGE,
    },
    inputdate: {
        width: WIDTH(90),
        height: HEIGHT(6.5),
        borderWidth: 0.9,
        borderRadius: WIDTH(2),
        alignSelf: 'center',
        borderColor: COLOR.GRAY,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewdropdown: {
        width: WIDTH(90),
        height: HEIGHT(6.5),
        borderWidth: 0.9,
        borderRadius: WIDTH(3.8),
        alignSelf: 'center',
        borderColor: COLOR.GRAYBLAND,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textinput: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
        left: WIDTH(2),
        fontWeight: '500',
        width: WIDTH(81),
    },
    texdropdown: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
        fontWeight: '500',
        left: WIDTH(10),
    },
    iconcalendar: {
        width: WIDTH(5),
        height: HEIGHT(3.5),
        tintColor: COLOR.GRAY,
    },
    icondown: {
        width: WIDTH(4),
        height: HEIGHT(3.5),
        tintColor: COLOR.BLACK,
        marginLeft: 'auto',
        right: WIDTH(4),
    },
    update: {
        width: WIDTH(90),
        height: HEIGHT(6),
        borderRadius: WIDTH(2),
        alignSelf: 'center',
        backgroundColor: COLOR.ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT(2),
    },
    disabledUpdate: {
        width: WIDTH(90),
        height: HEIGHT(6),
        borderRadius: WIDTH(2),
        alignSelf: 'center',
        backgroundColor: COLOR.GRAY,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT(2),
    },
    viewdelete: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: HEIGHT(4),
    },
    textupdate: {
        color: COLOR.WHITE,
        fontSize: FONTSIZE(2),
        fontWeight: '500',
    },
    icondelete: {
        width: WIDTH(5),
        height: HEIGHT(2.3),
    },
    textdelete: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
        fontWeight: '400',
        left: WIDTH(2)
    },
    dropdown: {
        width: WIDTH(90),
        height: HEIGHT(6),
        borderWidth: 0.9,
        borderRadius: WIDTH(2),
        alignSelf: 'center',
        borderColor: COLOR.GRAY,
        flexDirection: 'row',
    },
    viewcheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT(2),
        width: WIDTH(90),
        left: WIDTH(2),
        gap: WIDTH(2),
    },
    textcheckbox: {
        color: COLOR.BLACK,
        fontSize: FONTSIZE(1.9),
        fontWeight: '500',
        left: WIDTH(2),
    },
    textcheckboxprotect: {
        color: COLOR.BLUE,
        fontSize: FONTSIZE(1.9),
        fontWeight: '500',
    },
    checkbox: {
        backgroundColor: COLOR.WHITE,
        borderColor: COLOR.WHITE,
        tintColor: COLOR.BLACK,
    },
});

export default StyleCreateInformation;