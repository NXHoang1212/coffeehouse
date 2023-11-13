import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';

const StyleBottomSheetHome = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    // width: WIDTH(100),
    flex: 1,
    // bottom: HEIGHT(85),
    elevation: 10,
    borderTopLeftRadius: WIDTH(3),
    borderTopRightRadius: WIDTH(3),
  },
  line: {
    width: WIDTH(10),
    height: HEIGHT(0.7),
    backgroundColor: COLOR.GRAYBLAND,
    alignSelf: 'center',
    borderRadius: WIDTH(5),
    marginTop: HEIGHT(0.8),
  },
  vieworder: {
    flexDirection: 'row',
    marginTop: HEIGHT(2),
    width: WIDTH(90),
    height: HEIGHT(13),
    borderColor: COLOR.GRAYBLAND,
    borderWidth: WIDTH(0.25),
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: WIDTH(2),
  },
  viewshipper: {
    justifyContent: 'center',
    alignItems: 'center',
    left: WIDTH(4),
    flexDirection: 'column',
    gap: HEIGHT(0.8),
  },
  imgshipper: {
    width: WIDTH(13),
    height: WIDTH(13),
  },
  textshipper: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.MEDIUM,
  },
  viewbringship: {
    justifyContent: 'center',
    alignItems: 'center',
    right: WIDTH(4),
    flexDirection: 'column',
    gap: HEIGHT(0.8),
  },
  imgbringship: {
    width: WIDTH(15),
    height: WIDTH(15),
    left: WIDTH(1),
  },
  viewimgbringship: {
    width: WIDTH(13),
    height: WIDTH(13),
    backgroundColor: COLOR.SKIN,
    borderRadius: WIDTH(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbringship: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.MEDIUM,
  },
  lineship: {
    width: WIDTH(0.2),
    height: HEIGHT(13),
    backgroundColor: COLOR.GRAYBLAND,
    alignSelf: 'center',
  },
  viewbanner: {
    height: HEIGHT(28),
    alignSelf: 'center',
  },
  viewbean: {
    bottom: HEIGHT(4),
    left: WIDTH(5),
  },
  viewimgbean: {
    width: WIDTH(90),
    height: WIDTH(25),
    borderWidth: WIDTH(0.3),
    borderColor: COLOR.GRAYBLAND,
    borderRadius: WIDTH(2),
    top: HEIGHT(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(7),
  },
  imgbean: {
    width: WIDTH(20),
    height: WIDTH(20),
    resizeMode: 'cover',
    borderRadius: WIDTH(2),
    left: WIDTH(3),
  },
  textbean: {
    fontSize: FONTSIZE(2.3),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.SEMIBOLD,
  },
  viewtext: {
    flexDirection: 'column',
    gap: HEIGHT(0.5),
  },
  texttitlebean: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    width: WIDTH(47),
    fontFamily: FONTSTYLE.SEMIBOLD,
  },
  textbeanproduct: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.GRAY,
    fontWeight: '500',
  },
  viewpricebean: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(0.7),
  },
  textbeanprice: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.GREEN,
  },
  viewchangebean: {
    width: WIDTH(13),
    height: HEIGHT(3.5),
    backgroundColor: COLOR.SKINBLAND,
    borderRadius: WIDTH(4),
    justifyContent: 'center',
    alignItems: 'center',
    right: WIDTH(8),
  },
  textchangebean: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.ORANGE,
    fontFamily: FONTSTYLE.REGULAR,
    fontWeight: '800',
  },
  viewsuggest: {
    left: WIDTH(5),
    height: HEIGHT(25),
  },
  textsuggest: {
    fontSize: FONTSIZE(2.1),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.SEMIBOLD,
  },
  viewdiscover: {},
  viewimgdiscover: {
    flexDirection: 'row',
    alignItems: 'center',
    left: WIDTH(5),
    gap: WIDTH(1),
  },
  textdiscover: {
    fontSize: FONTSIZE(2.1),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.SEMIBOLD,
  },
  imgdiscover: {
    width: WIDTH(6),
    height: WIDTH(6),
  },
  viewtabdiscover: {
    flexDirection: 'row',
    marginTop: HEIGHT(1),
    gap: WIDTH(5),
    marginLeft: WIDTH(6.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabcontainer: {},
  activeTab: {
    width: WIDTH(34),
    height: HEIGHT(4),
    backgroundColor: COLOR.SKINBLAND,
    borderRadius: WIDTH(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttab: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.REGULAR,
    fontWeight: '700',
  },
  activeText: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.ORANGE,
    fontFamily: FONTSTYLE.REGULAR,
    fontWeight: '700',
  },
  viewspace: {
    width: WIDTH(15),
  },
  viewtabspecial: {
    // flexDirection: 'row',
    height: HEIGHT(115),
    top: HEIGHT(1),
  },
  viewtabfreshhome: {
    // flexDirection: 'row',
    height: HEIGHT(63),
    top: HEIGHT(1),
  },
  viewtabcoffelover: {
    height: HEIGHT(63),
    top: HEIGHT(1),
  },
});

export default StyleBottomSheetHome;
