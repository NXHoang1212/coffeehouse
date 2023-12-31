import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSIZE, HEIGHT, WIDTH } from '../../constant/Responsive';

const StyleAboutCoffee = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.GRAYBLAND1,
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(100),
    height: HEIGHT(4),
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
    marginLeft: WIDTH(28),
  },
  viewLoading: {
    bottom: WIDTH(193),
  },
  progress: {
    marginTop: HEIGHT(30),
  },
});

export default StyleAboutCoffee;
