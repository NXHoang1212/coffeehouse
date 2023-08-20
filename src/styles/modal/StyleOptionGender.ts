import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';


const StyleOptionGender = StyleSheet.create({
    modalContainer: {
        backgroundColor: COLOR.WHITE,
        width: WIDTH(95),
        height: HEIGHT(22),
        borderRadius: 10,
        elevation: 10,
        position: 'absolute',
        bottom: 3,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    line: {
        width: WIDTH(90),
        height: 0.4,
        backgroundColor: COLOR.BLACK,
        opacity: 0.3,
        marginTop: HEIGHT(1),
    },
    modalContent: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    modalTitle: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLACK,
    },
    modalOptionText: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLUE,
        fontWeight: 'bold',
    },
    modalCloseText: {
        fontSize: FONTSIZE(2),
        color: COLOR.BLUE,
        fontWeight: 'bold',
    },
});

export default StyleOptionGender;