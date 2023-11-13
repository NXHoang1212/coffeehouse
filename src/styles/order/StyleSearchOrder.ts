import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';

const StyleSearchOrder = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewheader: {
    top: HEIGHT(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewsearch: {
    width: WIDTH(83),
    height: HEIGHT(4.5),
    borderRadius: 10,
    backgroundColor: COLOR.GRAYBLAND1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: WIDTH(2),
    left: WIDTH(1),
  },
  viewiconsearch: {
    marginLeft: WIDTH(6),
  },
  iconsearch: {
    tintColor: COLOR.BLACK,
  },
  inputsearch: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    width: WIDTH(63),
    height: HEIGHT(4.5),
    top: HEIGHT(0.2),
  },
  line: {
    width: WIDTH(100),
    height: HEIGHT(0.4),
    backgroundColor: COLOR.GRAYBLAND1,
    alignSelf: 'center',
    marginTop: HEIGHT(4.5),
  },
  viewcancel: {},
  textcancel: {
    fontSize: FONTSIZE(2),
    color: COLOR.RED,
    right: WIDTH(0.5),
  },
  iconcancel: {
    width: WIDTH(3),
    height: HEIGHT(1.8),
  },
  viewitem: {
    top: HEIGHT(2),
    marginHorizontal: WIDTH(5),
    height: HEIGHT(100),
  },
});

export default StyleSearchOrder;
