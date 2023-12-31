import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleCategoryItem = StyleSheet.create({
  viewcategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: WIDTH(100),
    alignSelf: 'center',
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
    justifyContent: 'center',
    gap: HEIGHT(1.2),
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
    width: WIDTH(25),
    height: HEIGHT(5.2),
    textAlign: 'center',
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
    resizeMode: 'contain',
  },
  viewbottomsheet: {
    backgroundColor: COLOR.BLACK,
    width: WIDTH(100),
    height: HEIGHT(100),
  },
});

export default StyleCategoryItem;
