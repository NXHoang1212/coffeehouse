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
  viewbody: {},
  viewtabdiscover: {
    flexDirection: 'row',
    marginTop: HEIGHT(1.5),
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: WIDTH(3),
  },
  tabcontainer: {
    width: WIDTH(30),
    height: HEIGHT(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    width: WIDTH(30),
    height: HEIGHT(3.2),
    backgroundColor: COLOR.SKINBLAND,
    borderRadius: WIDTH(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabcontainertwo: {
    width: WIDTH(30),
    height: HEIGHT(4),
    alignItems: 'center',
    justifyContent: 'center',
    left: WIDTH(3),
  },
  activeTabtwo: {
    width: WIDTH(30),
    height: HEIGHT(3.2),
    backgroundColor: COLOR.SKINBLAND,
    borderRadius: WIDTH(5),
    alignItems: 'center',
    justifyContent: 'center',
    left: WIDTH(3),
  },
  texttab: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.BLACK,
    fontWeight: '700',
  },
  activeText: {
    fontSize: FONTSIZE(1.8),
    color: COLOR.ORANGE,
    fontWeight: '700',
  },
  viewtabone: {
    height: HEIGHT(100),
  },
  viewtabtwo: {
    height: HEIGHT(100),
  },
  viewtabthree: {
    height: HEIGHT(100),
  },
});

export default StyleHistoryOrder;
