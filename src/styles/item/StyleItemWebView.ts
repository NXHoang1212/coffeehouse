import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';
import {COLOR} from '../../constant/Color';

const StyleItemWebView = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    marginBottom: HEIGHT(2),
  },
  viewimg: {
    flexDirection: 'row',
    marginHorizontal: WIDTH(3),
  },
  img: {
    width: WIDTH(45),
    height: HEIGHT(20),
    resizeMode: 'cover',
    borderRadius: WIDTH(3),
  },
  Viewtitle: {
    left: WIDTH(3),
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: WIDTH(48.54),
    // width: WIDTH(46.5),
  },
  title: {
    fontSize: FONTSIZE(1.8),
    fontFamily: FONTSTYLE.MEDIUM,
    color: COLOR.BLACK,
    fontWeight: '800',
  },
  viewtime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(1),
  },
  icontime: {
    width: WIDTH(4.7),
    height: HEIGHT(2),
    tintColor: COLOR.BLACK,
  },
  time: {
    fontSize: FONTSIZE(1.8),
    fontFamily: FONTSTYLE.REGULAR,
    color: COLOR.GRAY,
    fontWeight: '800',
  },
});

export default StyleItemWebView;
