import React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputKeyPressEventData, } from 'react-native';
import { COLOR } from '../../constant/Color';
import { HEIGHT, WIDTH } from '../../constant/Responsive';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  inputRef: any;
  phone: string;
};
const VeriftyInput = ({ value, onChangeText, onSubmitEditing, inputRef, phone }: Props) => {
  return (
    <TextInput
      keyboardType="number-pad"
      maxLength={1}
      style={styles.container}
      value={value}
      onChangeText={(text) => {
        onChangeText(text);
        if (text.length === 1) {
          onSubmitEditing();
        } else if (text.length === 0) {
          onSubmitEditing();
        }
      }}
      onSubmitEditing={onSubmitEditing}
      autoComplete="off"
      autoCorrect={false}
      autoCapitalize="none"
      returnKeyType="done"
      ref={inputRef}
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
