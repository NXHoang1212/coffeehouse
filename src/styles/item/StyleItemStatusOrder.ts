import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { FONTSTYLE } from '../../constant/Fonts';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleItemStatusOrder = StyleSheet.create({
  container: {},
  viewimage: {
    width: WIDTH(100),
    height: HEIGHT(23),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.SKINBLAND,
  },
  image: {
    width: WIDTH(48),
    height: HEIGHT(23),
    resizeMode: 'contain',
  },
  body: {
    marginTop: HEIGHT(1),
    paddingHorizontal: WIDTH(5),
  },
  viewpending: {
    flexDirection: 'column',
    gap: HEIGHT(0.25),
  },
  textpending: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACKTRANSPARENT,
  },
  textstatus: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  viewpaymentpending: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2.5),
    marginTop: HEIGHT(1),
    marginBottom: HEIGHT(1.5),
  },
  viewtextpaymentpending: {},
  texttimepending: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.ORANGE,
    fontWeight: 'bold',
  },
  texttime: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  texttimestatuspending: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACKTRANSPARENT,
  },
  line: {
    width: WIDTH(90),
    height: HEIGHT(0.15),
    backgroundColor: COLOR.BLACKTRANSPARENT,
    alignSelf: 'center',
  },
  viewbutton: {
    marginTop: HEIGHT(2),
  },
  buttontwopayment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(5),
  },
  buttonpayment: {
    width: WIDTH(42),
    height: HEIGHT(5),
    borderRadius: WIDTH(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.SKIN,
  },
  textbuttonsucess: {
    fontSize: FONTSIZE(2),
    color: COLOR.RED,
    fontWeight: '600',
    letterSpacing: WIDTH(0.25),
  },
  buttoncancel: {
    width: WIDTH(42),
    height: HEIGHT(5),
    borderRadius: WIDTH(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.BLACKTRANSPARENT,
  },
  textbuttoncancel: {
    fontSize: FONTSIZE(2),
    color: COLOR.WHITE,
    fontWeight: '600',
    letterSpacing: WIDTH(0.25),
  },
  viewchangepayment: {
    width: WIDTH(90),
    height: HEIGHT(5),
    borderRadius: WIDTH(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.SKINBLAND,
    alignSelf: 'center',
    marginTop: HEIGHT(2),
    marginBottom: HEIGHT(2),
  },
  textchangepayment: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.RED,
  },
  viewinformation: {
    marginBottom: HEIGHT(1.5),
    marginTop: HEIGHT(1.5),
  },
  textinformation: {
    fontSize: FONTSIZE(2.3),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginBottom: HEIGHT(1),
  },
  viewuser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewname: {
    flexDirection: 'column',
    gap: 1,
  },
  texttitleinformation: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACKTRANSPARENT,
  },
  textuser: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: '500',
  },
  viewmobile: {
    marginLeft: 'auto',
    right: WIDTH(10),
    flexDirection: 'column',
    gap: 1,
  },
  lineuser: {
    width: WIDTH(0.2),
    height: HEIGHT(5),
    backgroundColor: COLOR.BLACKTRANSPARENT,
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  viewaddress: {
    flexDirection: 'column',
    gap: 3,
    marginTop: HEIGHT(1),
    marginBottom: HEIGHT(1),
  },
  textaddress: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: '500',
    width: WIDTH(99),
    letterSpacing: WIDTH(0.25),
  },
  viewstatuspayment: {
    flexDirection: 'column',
    gap: 3,
    marginTop: HEIGHT(1),
    marginBottom: HEIGHT(1),
  },
  viewunpaid: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
  },
  textunpaid: {
    fontSize: FONTSIZE(1.6),
    color: COLOR.WHITE,
    fontWeight: 'bold',
    width: WIDTH(15),
    height: HEIGHT(2),
    backgroundColor: COLOR.RED,
    borderRadius: 1,
    textAlign: 'center',
  },
  viewtransaction: {
    flexDirection: 'column',
    gap: 3,
    marginTop: HEIGHT(0.5),
    marginBottom: HEIGHT(1),
  },
  viewproduct: {
    marginBottom: HEIGHT(1.5),
  },
  textProduct: {
    fontSize: FONTSIZE(2.2),
    color: COLOR.BLACK,
    fontWeight: '500',
    marginBottom: HEIGHT(1),
    marginTop: HEIGHT(1),
  },
  viewtitleProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
  },
  textquantity: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  viewnameProduct: {},
  textnameproduct: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  textprice: {
    marginLeft: 'auto',
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  viewtotal: {
    gap: WIDTH(1),
    marginBottom: HEIGHT(1),
  },
  viewamount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
    marginBottom: HEIGHT(1),
  },
  textamount: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACKTRANSPARENT,
    fontWeight: 'bold',
  },
  texttotal: {
    marginLeft: 'auto',
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: 'bold',
  },
  viewshipper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
    marginBottom: HEIGHT(1),
  },
  viewpromo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
    marginBottom: HEIGHT(1),
  },
  viewmethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
    marginBottom: HEIGHT(1),
  },
  iconmethod: {
    width: WIDTH(7),
    height: WIDTH(7),
  },
  textmethod: {
    fontSize: FONTSIZE(1.8),
    fontWeight: '400',
    color: COLOR.BLACK,
  },
});

export default StyleItemStatusOrder;
