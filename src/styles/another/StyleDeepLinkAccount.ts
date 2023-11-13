import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {FONTSIZE, HEIGHT, WIDTH} from '../../constant/Responsive';

const StyleDeepLinkAccount = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.GRAYBLAND1,
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(100),
    height: HEIGHT(6.3),
    backgroundColor: COLOR.WHITE,
    borderBottomWidth: 0.5,
  },
  iconBack: {
    left: WIDTH(3),
    width: WIDTH(5),
    height: HEIGHT(3),
  },
  textHeader: {
    fontSize: FONTSIZE(2.4),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginLeft: WIDTH(27),
  },
  body: {
    top: HEIGHT(2),
  },
  viewitem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(95),
    height: HEIGHT(7),
    backgroundColor: COLOR.WHITE,
    alignSelf: 'center',
    borderRadius: 13,
    borderWidth: 0.3,
    borderColor: COLOR.GRAY,
  },
  iconharavan: {
    width: WIDTH(10),
    height: HEIGHT(20),
    resizeMode: 'contain',
    marginLeft: WIDTH(2),
  },
  textitem: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: '400',
    marginLeft: WIDTH(3),
    letterSpacing: 0.5,
  },
  iconright: {
    width: WIDTH(5),
    height: HEIGHT(3),
    resizeMode: 'contain',
    position: 'absolute',
    right: WIDTH(3),
  },
});

export default StyleDeepLinkAccount;
