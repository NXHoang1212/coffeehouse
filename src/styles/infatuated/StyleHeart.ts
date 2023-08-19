import { StyleSheet } from "react-native";
import { COLOR } from '../../constant/Color';
import { HEIGHT, WIDTH, FONTSIZE } from "../../constant/Responsive";


const styleHeart = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
    },
    viewheader: {
        flexDirection: 'row',
        alignItems: 'center',
        left: WIDTH(3),
        top: HEIGHT(1)
    },
    textheader: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        left: WIDTH(25)
    },
});

export default styleHeart;