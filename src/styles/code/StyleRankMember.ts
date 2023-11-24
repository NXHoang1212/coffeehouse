import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';
import {FONTSTYLE} from '../../constant/Fonts';

const StyleRankMember = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.GRAYBLAND1,
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(100),
    height: HEIGHT(6),
    backgroundColor: COLOR.WHITE,
    borderBottomWidth: 0.5,
  },
  iconBack: {
    marginLeft: WIDTH(3),
    width: WIDTH(5),
    height: HEIGHT(3),
  },
  textHeader: {
    fontSize: FONTSIZE(2.4),
    color: COLOR.BLACK,
    fontWeight: 'bold',
    marginLeft: WIDTH(24),
  },
  body: {},
  viewimgbean: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH(96),
    height: HEIGHT(25),
    backgroundColor: COLOR.ORANGE,
    top: HEIGHT(1),
    alignSelf: 'center',
    borderRadius: 14,
  },
  imgbean: {
    width: WIDTH(50),
    height: HEIGHT(25),
    marginLeft: 'auto',
  },
  viewtextbean: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH(98),
    bottom: HEIGHT(10),
  },
  textnew: {
    fontSize: FONTSIZE(3),
    color: COLOR.WHITE,
    fontWeight: 'bold',
    marginLeft: WIDTH(2),
  },
  textbean: {
    fontSize: FONTSIZE(2.4),
    color: COLOR.WHITE,
    fontWeight: 'bold',
    right: WIDTH(7),
  },
  viewslider: {
    right: WIDTH(95),
  },
  viewtextslider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: WIDTH(90),
    height: HEIGHT(1.5),
    top: HEIGHT(1),
    backgroundColor: COLOR.WHITE,
    borderRadius: 12,
  },
  textslidernew: {
    fontSize: FONTSIZE(2),
    color: COLOR.WHITE,
    fontWeight: '500',
  },
  textslidercu: {
    fontSize: FONTSIZE(2),
    color: COLOR.WHITE,
    fontWeight: '600',
  },
  viewtab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: WIDTH(2.5),
    width: WIDTH(100),
    height: HEIGHT(6),
    backgroundColor: COLOR.WHITE,
    alignSelf: 'center',
    borderBottomWidth: 0.15,
  },
  viewtabitem: {
    width: WIDTH(11),
    height: HEIGHT(6),
    right: WIDTH(1),
    top: HEIGHT(1.5),
  },
  viewtablineactive: {
    width: WIDTH(20),
    borderWidth: 1,
    borderColor: COLOR.ORANGE,
    alignSelf: 'center',
    top: HEIGHT(1.8),
  },
  viewtabdiamon: {},
  viewtabline: {},
  texttab: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.5,
    top: HEIGHT(0.5),
  },
  texttabactive: {
    fontSize: FONTSIZE(2),
    color: COLOR.ORANGE,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.5,
    top: HEIGHT(0.5),
  },
  viewitem: {
    height: HEIGHT(100),
  },
});

export default StyleRankMember;
