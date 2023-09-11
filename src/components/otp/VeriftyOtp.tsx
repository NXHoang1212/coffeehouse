import { TextInput, StyleSheet } from 'react-native';
import { WIDTH, HEIGHT } from '../../constant/Responsive';
import { COLOR } from '../../constant/Color';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onCompleted?: () => void;
}

const VeriftyInput = ({ value, onChangeText, onCompleted }: Props) => {
  return (
    <TextInput
      keyboardType="number-pad"
      maxLength={1}
      style={styles.container}
      value={value}
      onChangeText={onChangeText}
      autoComplete='off'
      autoCorrect={false}
      autoCapitalize='none'
      returnKeyType='next'
      onSubmitEditing={onCompleted}
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
