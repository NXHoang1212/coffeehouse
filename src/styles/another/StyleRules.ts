import { StyleSheet } from 'react-native';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';

const StyleRules = StyleSheet.create({
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
    marginLeft: WIDTH(30),
  },
  progressBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00ADEF',
  },
  progressText: {
    marginLeft: 5,
    color: '#00ADEF',
  },
});

export default StyleRules;
