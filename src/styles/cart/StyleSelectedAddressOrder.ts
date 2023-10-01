import { StyleSheet } from "react-native";
import { WIDTH, HEIGHT, FONTSIZE } from "../../constant/Responsive";
import { COLOR } from "../../constant/Color";

const StyleSelectedAddressOrder = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE
    },
    textheader: {
        textAlign: 'center',
        fontSize: FONTSIZE(2),
        fontWeight: 'bold',
        color: COLOR.BLACK,
    },
    body: {
        height: HEIGHT(100),
    },
});

export { StyleSelectedAddressOrder }