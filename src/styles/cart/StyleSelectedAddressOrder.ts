import { StyleSheet } from 'react-native';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';

const StyleSelectedAddressOrder = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HEIGHT(2),
    marginHorizontal: WIDTH(3),
  },
  textheader: {
    fontSize: FONTSIZE(2),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    left: WIDTH(21),
  },
  iconBack: {
    width: WIDTH(5),
    height: HEIGHT(2),
  },
  body: {
    height: HEIGHT(80),
  },
  viewdone: {
    width: WIDTH(85),
    height: HEIGHT(6),
    backgroundColor: COLOR.ORANGE1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewadd: {
    width: WIDTH(85),
    height: HEIGHT(6),
    backgroundColor: COLOR.ORANGE1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: HEIGHT(5),
  },
  textadd: {
    fontSize: FONTSIZE(1.7),
    fontWeight: 'bold',
    color: COLOR.BLACK,
  },
});

export { StyleSelectedAddressOrder };
