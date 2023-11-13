import {StyleSheet} from 'react-native';
import {COLOR} from '../../constant/Color';
import {WIDTH, HEIGHT, FONTSIZE} from '../../constant/Responsive';

const StyleOptionsCamera = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: COLOR.BLACKTRANSPARENT,
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    bottom: 0,
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: WIDTH(5),
    borderTopRightRadius: WIDTH(5),
    height: HEIGHT(20),
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(2),
  },
  iconcancel: {
    width: WIDTH(3.5),
    height: WIDTH(3.5),
    tintColor: COLOR.GRAYBLAND,
    left: WIDTH(19),
  },
  texttile: {
    fontSize: FONTSIZE(2.2),
    fontWeight: 'bold',
    color: COLOR.BLACK,
    textAlign: 'center',
    left: WIDTH(2.5),
  },
  viewbody: {
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT(13),
    flexDirection: 'column',
    gap: HEIGHT(2),
  },
  iconcamera: {
    width: WIDTH(5),
    height: WIDTH(5),
  },
  icongallery: {
    width: WIDTH(5),
    height: WIDTH(5),
  },
  viewitem: {
    flexDirection: 'row',
    gap: WIDTH(4),
  },
  textitem: {
    fontSize: FONTSIZE(1.9),
    color: COLOR.BLUE,
    fontWeight: '700',
  },
  line: {
    width: WIDTH(100),
    height: HEIGHT(0.05),
    backgroundColor: COLOR.RED,
    alignSelf: 'center',
  },
});

export {StyleOptionsCamera};
