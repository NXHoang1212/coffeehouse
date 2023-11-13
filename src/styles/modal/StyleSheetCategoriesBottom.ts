import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {FONTSTYLE} from '../../constant/Fonts';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleSheetCategoriesBottom = StyleSheet.create({
  viewcategory: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: WIDTH(5),
    top: HEIGHT(1),
  },
  viebottomheader: {},
  viewcate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: WIDTH(4),
  },
  line: {
    width: WIDTH(100),
    height: HEIGHT(0.08),
    backgroundColor: COLOR.GRAYBLAND,
    top: HEIGHT(1),
  },
  textcategorytitle: {
    fontSize: FONTSIZE(2),
    letterSpacing: WIDTH(0.4),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconx: {
    width: WIDTH(4),
    height: WIDTH(4),
    resizeMode: 'contain',
    left: WIDTH(28),
  },
  viewcategoryitem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: HEIGHT(1),
  },
  viewimgitem: {
    width: WIDTH(15),
    height: WIDTH(15),
    borderRadius: WIDTH(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SKINBLAND,
  },
  viewimgitemtimte: {
    width: WIDTH(15),
    height: WIDTH(15),
    borderRadius: WIDTH(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SKINBLAND,
    left: WIDTH(1.2),
  },
  iconcategory: {
    width: WIDTH(12),
    height: WIDTH(12),
    borderRadius: WIDTH(10),
    resizeMode: 'contain',
  },
  textcategoryfirst: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    // width: WIDTH(24.2),
    textAlign: 'center',
  },
  textcategorytwo: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    top: HEIGHT(0.5),
    textAlign: 'center',
  },
  textcategorytea: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    textAlign: 'center',
    left: WIDTH(1),
    top: HEIGHT(0.5),
  },
  viewseemore: {
    width: WIDTH(20),
    height: WIDTH(20),
    borderRadius: WIDTH(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: WIDTH(0.3),
    borderColor: COLOR.GRAYBLAND,
    left: WIDTH(1),
  },
  iconseemore: {
    width: WIDTH(11),
    height: WIDTH(11),
    borderRadius: WIDTH(10),
    resizeMode: 'contain',
  },
});

export default StyleSheetCategoriesBottom;
