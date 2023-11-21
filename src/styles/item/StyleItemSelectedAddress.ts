import { StyleSheet } from 'react-native';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';

const StyleItemSelectedAddress = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
    right: WIDTH(2),
  },
  imageheader: {
    width: WIDTH(10),
    height: HEIGHT(4.5),
    resizeMode: 'contain',
    marginLeft: WIDTH(2),
  },
  viewheader: {
    width: WIDTH(87),
    height: HEIGHT(6.5),
    backgroundColor: COLOR.SKINBLAND,
    borderRadius: 10,
    marginTop: HEIGHT(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(5),
  },
  viewtextheader: {},
  textheader: {
    fontSize: FONTSIZE(2),
    fontWeight: 'bold',
    color: COLOR.BLACK,
  },
  textdetail: {
    fontSize: FONTSIZE(1.5),
    color: COLOR.BLACK,
    width: WIDTH(70),
  },
  checkbox: {
    width: WIDTH(10),
    top: HEIGHT(1),
  },
  viewbutton: {
    flexDirection: 'column',
    gap: HEIGHT(10),
  },
  heightadd: {
    height: HEIGHT(20),
  },
  viewadd: {
    width: WIDTH(85),
    height: HEIGHT(6),
    backgroundColor: COLOR.ORANGE1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: HEIGHT(5),    
  },
  viewdone: {
    width: WIDTH(85),
    height: HEIGHT(6),
    backgroundColor: COLOR.ORANGE1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(20),
  },
  textdone: {
    fontSize: FONTSIZE(2),
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
});

export { StyleItemSelectedAddress };
