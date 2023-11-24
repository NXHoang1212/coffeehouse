import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleHistoryBean = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.GRAYBLAND1,
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
    fontSize: FONTSIZE(2.3),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginLeft: WIDTH(27),
  },
});

export default StyleHistoryBean;
