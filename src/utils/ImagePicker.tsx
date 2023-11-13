import ImagePicker from 'react-native-image-crop-picker';

export const OpenCamera = (
  setAvatar: (newAvatar: string) => void,
  onDismiss: () => void,
) => {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  })
    .then(image => {
      console.log('Image selected from camera:', image);
      setAvatar(image.path);
      onDismiss();
    })
    .catch(error => {
      console.log('Error selecting image from camera:', error);
    });
};

export const OpenPicker = (
  setAvatar: (newAvatar: string) => void,
  onDismiss: () => void,
) => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  })
    .then(image => {
      console.log('Image selected from gallery:', image);
      setAvatar(image.path);
      onDismiss();
    })
    .catch(error => {
      console.log('Error selecting image from gallery:', error);
    });
};
