import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {FONTSTYLE} from '../../constant/Fonts';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleItemFavourites = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewbody: {
    flexDirection: 'column',
    marginBottom: HEIGHT(2),
  },
  viewitemtextproduct: {
    flexDirection: 'column',
    gap: WIDTH(1),
  },
  textname: {
    fontSize: FONTSIZE(1.9),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    letterSpacing: WIDTH(0.1),
    width: WIDTH(60),
  },
  textprice: {
    fontSize: FONTSIZE(1.8),
    fontWeight: '500',
    color: COLOR.BLACK,
    letterSpacing: WIDTH(0.1),
  },
  viewcategories: {},
  viewProduct: {
    flexDirection: 'row',
    gap: WIDTH(2),
  },
  imageproduct: {
    width: WIDTH(23),
    height: HEIGHT(10.8),
    borderRadius: WIDTH(2),
  },
  textnamecategories: {
    fontSize: FONTSIZE(2),
    fontWeight: '700',
    color: COLOR.BLACK,
    letterSpacing: WIDTH(0.2),
  },
  viewiconplus: {
    width: WIDTH(6),
    height: WIDTH(6),
    borderRadius: WIDTH(5),
    backgroundColor: COLOR.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    right: WIDTH(5),
    top: HEIGHT(3),
  },
  iconplus: {
    tintColor: COLOR.WHITE,
  },
  viewbottomsheet: {
    backgroundColor: COLOR.BLACK,
  },
  viewiconswipedelete: {
    width: WIDTH(14),
    backgroundColor: COLOR.RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconswipedelete: {
    width: WIDTH(7),
    height: WIDTH(7),
    tintColor: COLOR.WHITE,
  },
});

export default StyleItemFavourites;
