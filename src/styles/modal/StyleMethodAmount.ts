import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleMethodAmount = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: COLOR.BLACKTRANSPARENT,
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    bottom: 0,
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: WIDTH(5),
    borderTopRightRadius: WIDTH(5),
    height: HEIGHT(55),
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(2),
  },
  iconcancel: {
    width: WIDTH(3.5),
    height: WIDTH(3.5),
    tintColor: COLOR.GRAYBLAND,
    left: WIDTH(18),
  },
  texttile: {
    fontSize: FONTSIZE(2.2),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  viewbody: {
    flexDirection: 'column',
    gap: HEIGHT(1.5),
    top: HEIGHT(3),
  },
  viewoptionbody: {
    width: WIDTH(100),
    height: HEIGHT(8),
    backgroundColor: COLOR.GRAYBLAND1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: COLOR.GRAYBLAND,
  },
  textbodyoption: {
    fontSize: FONTSIZE(1.7),
    fontWeight: '500',
    color: COLOR.BLACKTRANSPARENT,
    width: WIDTH(96),
  },
  viewchoosepayment: {
    marginHorizontal: WIDTH(3),
  },
  textchoosepayment: {
    fontSize: FONTSIZE(2.1),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    marginBottom: HEIGHT(1),
  },
  viewoptionpayment: {
    width: WIDTH(100),
    alignItems: 'center',
    marginLeft: WIDTH(8),
  },
  viewoption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HEIGHT(1),
  },
  viewtextimage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: WIDTH(2),
  },
  iconoption: {
    width: WIDTH(13),
    height: HEIGHT(4),
    resizeMode: 'contain',
  },
  line: {
    width: WIDTH(100),
    height: HEIGHT(0.05),
    backgroundColor: COLOR.BLACKTRANSPARENT,
  },
});

export {StyleMethodAmount};
