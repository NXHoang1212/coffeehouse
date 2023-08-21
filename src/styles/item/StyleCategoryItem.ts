import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';


const StyleCategoryItem = StyleSheet.create({
    viewcategory: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textcategorytitle: {
        fontSize: FONTSIZE(2),
        letterSpacing: WIDTH(0.4),
        color: COLOR.BLACK,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewcategoryitem: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: HEIGHT(1),
    },
    viewcategorycoffee: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: HEIGHT(1),
        right: WIDTH(2),
    },
    viewimgitem: {
        width: WIDTH(16),
        height: WIDTH(16),
        borderRadius: WIDTH(12),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.SKINBLAND,
    },
    iconcategory: {
        width: WIDTH(12),
        height: WIDTH(12),
        borderRadius: WIDTH(10),
    },
    textcategoryfirst: {
        fontSize: FONTSIZE(1.6),
        color: COLOR.BLACK,
        textAlign: 'center',
    },
    textcategorytwo: {
        fontSize: FONTSIZE(1.6),
        color: COLOR.BLACK,
        top: HEIGHT(0.5),
        textAlign: 'center',
    },
    textcategorytea: {
        fontSize: FONTSIZE(1.6),
        color: COLOR.BLACK,
        textAlign: 'center',
        // left: WIDTH(1),
        top: HEIGHT(0.5),
    },
    viewseemore: {
        width: WIDTH(14.9),
        height: WIDTH(14.9),
        borderRadius: WIDTH(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: WIDTH(0.3),
        marginTop: HEIGHT(0.5),
        borderColor: COLOR.GRAYBLAND,
    },
    iconseemore: {
        width: WIDTH(10),
        height: WIDTH(10),
        borderRadius: WIDTH(10),
        resizeMode: 'contain'
    },
    viewbottomsheet: {
        backgroundColor: COLOR.BLACK,
        width: WIDTH(100),
        height: HEIGHT(100),
    }
});


export default StyleCategoryItem;