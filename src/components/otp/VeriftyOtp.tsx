import React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputKeyPressEventData, } from 'react-native';
import { COLOR } from '../../constant/Color';
import { HEIGHT, WIDTH } from '../../constant/Responsive';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  inputRef: any;
};
const VeriftyInput = ({ value, onChangeText, onSubmitEditing, inputRef }: Props) => {
  return (
    <TextInput
      ref={inputRef}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      keyboardType="numeric"
      maxLength={1}
      style={styles.container}
      onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key === 'Back') {
          if (value === '') {
            const index = inputRef.current.indexOf(e.target);
            inputRef.current[index].focus();
          }
        }
      }}
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
