import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemRecomend = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewbody: {
    flexDirection: 'column',
    gap: WIDTH(3),
  },
  viewitemtextproduct: {
    flexDirection: 'column',
    gap: WIDTH(1),
  },
  textname: {
    fontSize: FONTSIZE(1.6),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    width: WIDTH(60),
  },
  textprice: {
    fontSize: FONTSIZE(1.5),
    fontWeight: '500',
    color: COLOR.BLACK,
  },
  viewProduct: {
    flexDirection: 'column',
    gap: WIDTH(2),
    width: WIDTH(42),
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
    width: WIDTH(4),
    height: WIDTH(4),
    borderRadius: WIDTH(4),
    backgroundColor: COLOR.ORANGE,
    left: WIDTH(5),
  },
  iconplus: {
    tintColor: COLOR.WHITE,
  },
  viewplusPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StyleItemRecomend;
