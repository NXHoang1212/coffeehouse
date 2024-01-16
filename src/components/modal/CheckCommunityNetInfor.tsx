import { Modal, Pressable, Text, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import StyleCheckComminityNetInfor from '../../styles/modal/StyleCheckComminityNetInfor';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
}

const CheckCommunityNetInfor: React.FC<Props> = ({ show, onDismiss, enableBackDropDismiss = true, }) => {
  return (
    <Modal animationType="fade" transparent={true} onRequestClose={onDismiss} hardwareAccelerated={true} statusBarTranslucent={true}>
      <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleCheckComminityNetInfor.backdrop} />
      <View style={StyleCheckComminityNetInfor.container}>
        <Text>CheckCommunityNetInfor</Text>
      </View>
    </Modal>
  );
};

export default CheckCommunityNetInfor;
