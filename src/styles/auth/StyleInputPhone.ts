import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {COLOR} from '../../constant/Color';

const StyleInputPhone = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewheader: {
    marginTop: HEIGHT(6.5),
    left: WIDTH(5),
  },
  iconback: {},
  viewtext: {
    marginTop: HEIGHT(2),
    width: WIDTH(80),
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: HEIGHT(1.5),
  },
  textinputphone: {
    fontSize: FONTSIZE(2.2),
    fontWeight: '700',
    color: COLOR.BLACK,
  },
  textphone: {
    fontSize: FONTSIZE(1.8),
    fontWeight: '400',
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  viewinput: {
    top: HEIGHT(6),
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(88),
    height: HEIGHT(5.9),
    borderWidth: WIDTH(0.3),
    borderRadius: WIDTH(3),
    borderColor: COLOR.GRAYBLAND,
    gap: WIDTH(2.5),
    marginBottom: HEIGHT(5.2),
    alignSelf: 'center',
  },
  viewfocusinput: {
    top: HEIGHT(6),
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(88),
    height: HEIGHT(5.9),
    borderWidth: WIDTH(0.3),
    borderRadius: WIDTH(3),
    borderColor: COLOR.BLACK,
    gap: WIDTH(2.5),
    marginBottom: HEIGHT(5.2),
  },
  textinput: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: '400',
  },
  input: {
    width: WIDTH(60),
    height: HEIGHT(6),
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: '400',
  },
  iconcancel: {
    width: WIDTH(5),
    height: HEIGHT(2.2),
    right: WIDTH(8),
  },
  iconvietnam: {
    width: WIDTH(5),
    height: HEIGHT(2.5),
    resizeMode: 'contain',
    marginLeft: WIDTH(5),
  },
  viewline: {
    height: HEIGHT(3),
    borderWidth: WIDTH(0.2),
    borderColor: COLOR.GRAY,
  },
  viewlogin: {
    width: WIDTH(88),
    height: HEIGHT(5.9),
    backgroundColor: COLOR.GRAYBLAND,
    marginBottom: HEIGHT(1.8),
    borderRadius: WIDTH(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HEIGHT(1),
    alignSelf: 'center',
    top: HEIGHT(2.5),
  },
  textlogin: {
    fontSize: FONTSIZE(2),
    color: COLOR.WHITE,
    fontWeight: '400',
  },
});

export default StyleInputPhone;
