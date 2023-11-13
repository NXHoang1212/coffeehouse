import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleBottomSheetDiscount = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    bottom: 0,
    backgroundColor: COLOR.GRAYLINE,
    borderTopLeftRadius: WIDTH(5),
    borderTopRightRadius: WIDTH(5),
    height: HEIGHT(85),
    elevation: 8,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    top: HEIGHT(1.5),
  },
  textitle: {
    fontSize: FONTSIZE(2.1),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    letterSpacing: WIDTH(0.1),
  },
  iconcancel: {
    width: WIDTH(5),
    height: WIDTH(4.65),
    resizeMode: 'contain',
    tintColor: COLOR.BLACKTRANSPARENT,
    right: WIDTH(5),
  },
  line: {
    width: WIDTH(80),
    height: HEIGHT(0.05),
    backgroundColor: COLOR.GRAY,
    marginTop: HEIGHT(3),
    marginBottom: HEIGHT(2),
  },
  body: {
    top: HEIGHT(3),
    width: WIDTH(85),
    height: HEIGHT(110),
    backgroundColor: COLOR.WHITE,
    alignSelf: 'center',
    borderRadius: WIDTH(3),
    elevation: 8,
    alignItems: 'center',
  },
  viewtext: {
    top: HEIGHT(2),
    flexDirection: 'column',
    gap: HEIGHT(1),
  },
  textTitle: {
    fontSize: FONTSIZE(1.7),
    color: COLOR.BLACK,
    letterSpacing: WIDTH(0.1),
    textAlign: 'center',
  },
  textName: {
    fontSize: FONTSIZE(2.1),
    color: COLOR.BLACK,
    letterSpacing: WIDTH(0.1),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewqrcode: {
    top: HEIGHT(4.5),
    alignItems: 'center',
  },
  viewcoppy: {
    top: HEIGHT(7),
    gap: WIDTH(3),
  },
  textqr: {
    textAlign: 'center',
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACK,
  },
  textcoppy: {
    textAlign: 'center',
    fontSize: FONTSIZE(1.9),
    color: COLOR.VIOLET,
    fontWeight: 'bold',
  },
  viewusedto: {
    top: HEIGHT(10),
    width: WIDTH(50),
    height: HEIGHT(5),
    backgroundColor: COLOR.BLACK,
    borderRadius: WIDTH(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 5,
    marginBottom: HEIGHT(9.5),
  },
  textusedto: {
    textAlign: 'center',
    fontSize: FONTSIZE(1.9),
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
  viewdateend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textend: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACKTRANSPARENT,
  },
  textdescription: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLACK,
    textAlign: 'justify',
    width: WIDTH(80),
    lineHeight: HEIGHT(2.5),
  },
});

export default StyleBottomSheetDiscount;
