import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';

const StyleSaveAddress = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(100),
    height: HEIGHT(5.5),
    backgroundColor: COLOR.WHITE,
    borderBottomWidth: 0.5,
  },
  iconBack: {
    marginLeft: WIDTH(3),
    width: WIDTH(4),
    height: HEIGHT(2.5),
  },
  textHeader: {
    fontSize: FONTSIZE(2.3),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginLeft: WIDTH(30),
  },
  viewbody: {
    top: HEIGHT(2),
    flexDirection: 'column',
    gap: HEIGHT(2),
  },
  viewAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2.3),
  },
  iconAddress: {
    width: WIDTH(5.5),
    height: HEIGHT(2.7),
    marginLeft: WIDTH(4),
  },
  iconplus: {
    marginLeft: WIDTH(5),
    tintColor: COLOR.BLACK,
  },
  textAddress: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  line: {
    width: WIDTH(88),
    height: HEIGHT(0.2),
    backgroundColor: COLOR.GRAYBLAND1,
    alignSelf: 'flex-end',
  },
  viewitem: {
    height: HEIGHT(100),
  },
});

export default StyleSaveAddress;
