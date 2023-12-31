import { StyleSheet, Dimensions } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';

const { width, height } = Dimensions.get('window');

const StyleOrder = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
  },
  viewheader: {
    left: WIDTH(3),
    flexDirection: 'row',
    alignItems: 'center',
    top: HEIGHT(1),
    gap: WIDTH(3),
  },
  viewhandlemenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2.5),
  },
  viewmenu: {
    width: WIDTH(6),
    height: HEIGHT(3),
    borderRadius: WIDTH(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SKIN,
  },
  iconmenu: {
    width: WIDTH(4),
    height: WIDTH(4),
  },
  viewmenutitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(3),
  },
  texttitle: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    fontFamily: FONTSTYLE.REGULAR,
  },
  iconwdown: {
    width: WIDTH(4.5),
    height: WIDTH(4),
    tintColor: COLOR.BLACK,
  },
  viewsearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    right: WIDTH(6),
    gap: WIDTH(3),
  },
  iconsearch: {
    width: WIDTH(4.2),
    height: WIDTH(4.2),
  },
  iconheart: {
    width: WIDTH(4.5),
    height: WIDTH(4.5),
    borderColor: COLOR.GRAY
  },
  line: {
    width: WIDTH(100),
    height: HEIGHT(0.025),
    backgroundColor: COLOR.GRAY,
    marginTop: HEIGHT(3),
  },
  viewbody: {
    marginTop: HEIGHT(2),
    gap: HEIGHT(3),
  },
  viewrender: {
    height: HEIGHT(100),
  },
  viewbottom: {
    height: height * 12.65,
    marginHorizontal: WIDTH(5),
    bottom: HEIGHT(1),
  },
  viewfavourites: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewcount: {
    width: WIDTH(4),
    height: WIDTH(4),
    borderRadius: WIDTH(2),
    backgroundColor: COLOR.RED,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: HEIGHT(0.5),
    right: WIDTH(1),
  },
  textcount: {
    fontSize: FONTSIZE(1.5),
    color: COLOR.WHITE,
  },
});

export default StyleOrder;
