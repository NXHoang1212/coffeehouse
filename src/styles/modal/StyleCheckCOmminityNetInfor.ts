import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/Color";
import { HEIGHT, WIDTH } from "../../constant/Responsive";

const StyleCheckComminityNetInfor = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: COLOR.BLACKTRANSPARENT,
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        bottom: 0,
        backgroundColor: COLOR.WHITE,
        borderTopLeftRadius: WIDTH(5),
        borderTopRightRadius: WIDTH(5),
        height: HEIGHT(60),
        elevation: 8,
    },
});

export default StyleCheckComminityNetInfor;