import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';

const StyleFeedBackOrder = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(100),
    height: HEIGHT(6),
    backgroundColor: COLOR.WHITE,
    borderBottomWidth: 0.5,
  },
  iconBack: {
    marginLeft: WIDTH(3),
    width: WIDTH(5),
    height: HEIGHT(3),
  },
  textHeader: {
    fontSize: FONTSIZE(2.4),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginLeft: WIDTH(22),
  },
  viewnoorder: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: HEIGHT(2),
    flex: 1,
  },
  iconNoOrder: {
    width: WIDTH(12.3),
    height: HEIGHT(6),
    tintColor: COLOR.ORANGE,
  },
  textNoOrder: {
    fontSize: FONTSIZE(2),
    color: COLOR.GRAY,
    fontWeight: '400',
  },
});

export default StyleFeedBackOrder;
