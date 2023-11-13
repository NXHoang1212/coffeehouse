import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';

const StyleConfirmOrderPayment = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: COLOR.BLACKTRANSPARENT,
  },
  modalContainer: {
    backgroundColor: COLOR.WHITE,
    width: WIDTH(82),
    height: HEIGHT(22),
    borderRadius: 10,
    elevation: 8,
    alignSelf: 'center',
    top: HEIGHT(40),
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(2),
    width: WIDTH(75),
    alignSelf: 'center',
  },
  texttitle: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  textbody: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  viewbutton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: HEIGHT(2.1),
    gap: HEIGHT(1.5),
  },
  textindex: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLUE,
    fontWeight: 'bold',
    textAlign: 'center',
    left: WIDTH(1),
  },
});

export default StyleConfirmOrderPayment;
