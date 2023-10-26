import { StyleSheet } from "react-native";
import { COLOR } from '../../constant/Color';
import { HEIGHT, WIDTH, FONTSIZE } from "../../constant/Responsive";


const styleFavourite = StyleSheet.create({
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
    iconback: {
        width: WIDTH(6),
        height: HEIGHT(2.5),
    },
    textheader: {
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        left: WIDTH(23)
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.1),
        backgroundColor: COLOR.BLACKTRANSPARENT,
        alignSelf: 'center',
        marginTop: HEIGHT(2),
    },
    viewbody: {
        height: HEIGHT(100),
        marginHorizontal: WIDTH(3),
        marginTop: HEIGHT(2),
    },
});

export default styleFavourite;