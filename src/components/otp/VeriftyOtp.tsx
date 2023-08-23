import { TextInput, StyleSheet } from 'react-native';
import { WIDTH, HEIGHT } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';

const VeriftyInput = () => {
  return (
    <TextInput
      keyboardType="number-pad"
      maxLength={1}
      style={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH(12),
    height: HEIGHT(6),
    backgroundColor: COLOR.GRAYBLAND,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
});
export default VeriftyInput;
