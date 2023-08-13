import { Dimensions, StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
const { height: SREEN_HEIGTH } = Dimensions.get('window');

const StyleBottomSheetHome = StyleSheet.create({
    container: {
        backgroundColor: COLOR.WHITE,
        height: HEIGHT(1000),
        width: WIDTH(100),
        borderRadius: 10,
        elevation: 10,
    },
    line: {
        width: WIDTH(20),
        height: HEIGHT(0.3),
        backgroundColor: COLOR.GRAY,
        alignSelf: 'center',
        marginVertical: HEIGHT(1),
        borderRadius: 1,
    },
});


export default StyleBottomSheetHome;