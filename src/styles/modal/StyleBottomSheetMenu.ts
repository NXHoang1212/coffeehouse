import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';


const StyleBottomSheetMenu = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
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
        height: HEIGHT(40),
        elevation: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: HEIGHT(1.3),
    },
    textitle: {
        fontSize: FONTSIZE(2.1),
        fontWeight: 'bold',
        color: COLOR.BLACK,
        letterSpacing: WIDTH(0.1),
    },
    iconcancel: {
        width: WIDTH(3.4),
        height: WIDTH(3.4),
        resizeMode: 'contain',
        tintColor: COLOR.GRAY,
        left: WIDTH(32),
    },
    line: {
        width: WIDTH(100),
        height: HEIGHT(0.06),
        backgroundColor: COLOR.GRAY,
        top: HEIGHT(2.3),
    },
    viewmenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: WIDTH(2),
    },
    viewcategory: {
        top: HEIGHT(3.4),
        flexDirection: 'column',
        marginHorizontal: WIDTH(2),
        gap: HEIGHT(1.2),
    },
    handleSale: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH(20),
    },
    viewitem: {
        width: WIDTH(17.5),
        height: HEIGHT(8),
        backgroundColor: COLOR.SKINBLAND,
        borderRadius: WIDTH(9),
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconitem: {
        width: WIDTH(12),
        height: WIDTH(12),
        resizeMode: 'contain',
        borderRadius: WIDTH(6),
    },
    textitem: {
        fontSize: FONTSIZE(1.5),
        fontWeight: '500',
        color: COLOR.BLACK,
        top: HEIGHT(0.5),
    },
});

export default StyleBottomSheetMenu;