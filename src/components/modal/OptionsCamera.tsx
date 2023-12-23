import { View, Text, Animated, Image, TouchableOpacity, Pressable, Dimensions, StatusBar, Modal } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Icon, infores } from '../../constant/Icon';
import { StyleOptionsCamera } from '../../styles/modal/StyleOptionsCamera';
import { OpenCamera, OpenPicker } from '../../utils/ImagePicker';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
  setAvatar: (newAvatar: string) => void;
}

const OptionsCamera: React.FC<Props> = ({
  show,
  onDismiss,
  enableBackDropDismiss = true,
  setAvatar,
}) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const [open, setopen] = useState<boolean>(show);
  useEffect(() => {
    if (show) {
      setopen(show);
      Animated.timing(bottomsheet, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottomsheet, {
        toValue: -bottomsheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setopen(false);
      });
    }
  }, [show]);
  if (!open) {
    return null;
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onDismiss}
      hardwareAccelerated={true}
      statusBarTranslucent={true}>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={StyleOptionsCamera.backdrop}
      />
      <Animated.View
        style={[StyleOptionsCamera.container, { bottom: bottomsheet }]}>
        <View style={StyleOptionsCamera.header}>
          <Text style={StyleOptionsCamera.texttile}>Thay đổi ảnh đại diện</Text>
          <TouchableOpacity onPress={() => onDismiss()}>
            <Image source={Icon.CANCEL} style={StyleOptionsCamera.iconcancel} />
          </TouchableOpacity>
        </View>
        <View style={StyleOptionsCamera.viewbody}>
          <TouchableOpacity
            style={StyleOptionsCamera.viewitem}
            onPress={() => OpenCamera(setAvatar, onDismiss)}>
            <Image
              source={infores.PICTURE}
              style={StyleOptionsCamera.iconcamera}
            />
            <Text style={StyleOptionsCamera.textitem}>Chụp ảnh mới</Text>
          </TouchableOpacity>
          <View style={StyleOptionsCamera.line} />
          <TouchableOpacity
            style={StyleOptionsCamera.viewitem}
            onPress={() => OpenPicker(setAvatar, onDismiss)}>
            <Image
              source={infores.GALLERY}
              style={StyleOptionsCamera.icongallery}
            />
            <Text style={StyleOptionsCamera.textitem}>
              Chọn ảnh từ thư viện
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default OptionsCamera;
