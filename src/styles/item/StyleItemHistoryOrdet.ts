import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {FONTSTYLE} from '../../constant/Fonts';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleItemHistoryOrder = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewbody: {
    flexDirection: 'column',
    gap: WIDTH(3),
  },

});

export default StyleItemHistoryOrder;
