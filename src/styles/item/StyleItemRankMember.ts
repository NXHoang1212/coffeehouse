import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {FONTSIZE, WIDTH, HEIGHT} from '../../constant/Responsive';

const StyleItemRankMember = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewitem: {
    flexDirection: 'row',
    alignItems: 'center',
    top: HEIGHT(0.5),
    height: WIDTH(15),
    gap: WIDTH(3),
  },
  viewitemimage: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemimage: {
    width: WIDTH(9),
    height: HEIGHT(4),
    marginLeft: WIDTH(5),
  },
  viewitemtext: {},
  itemtext: {
    width: WIDTH(74),
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACK,
    fontWeight: '400',
  },
  line: {
    width: WIDTH(98),
    height: HEIGHT(0.05),
    backgroundColor: COLOR.BLACK,
    alignSelf: 'center',
    left: WIDTH(5),
    marginTop: HEIGHT(1),
  },
});

export default StyleItemRankMember;
