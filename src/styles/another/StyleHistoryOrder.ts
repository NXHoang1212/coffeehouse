import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';

const StyleHistoryOrder = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
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
    marginLeft: WIDTH(25),
  },
  viewbody: {

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
  viewtabone: {},
  viewtabtwo: {},
  viewtabthree: {},
});

export default StyleHistoryOrder;
