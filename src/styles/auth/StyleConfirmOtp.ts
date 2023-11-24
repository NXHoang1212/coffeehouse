import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {COLOR} from '../../constant/Color';

const StyleConfirmOtp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  header: {
    top: HEIGHT(15),
  },
  textotp: {
    textAlign: 'center',
    fontSize: FONTSIZE(2.1),
    fontWeight: 'bold',
    color: COLOR.BLACK,
  },
  textsend: {
    textAlign: 'center',
    fontSize: FONTSIZE(1.9),
    fontWeight: '500',
    color: COLOR.BLACK,
    top: HEIGHT(2),
    width: WIDTH(80),
    alignSelf: 'center',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: WIDTH(3),
    top: HEIGHT(22),
    marginHorizontal: WIDTH(3),
  },
  viewfail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: WIDTH(1),
    top: HEIGHT(28),
  },
  textfail: {
    textAlign: 'center',
    fontSize: FONTSIZE(1.9),
    fontWeight: '500',
    color: COLOR.BLACK,
  },
  textsendagain: {
    textAlign: 'center',
    fontSize: FONTSIZE(1.9),
    fontWeight: '500',
    color: COLOR.GRAY,
  },
});

export default StyleConfirmOtp;
