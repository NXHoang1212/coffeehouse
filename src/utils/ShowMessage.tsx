import {showMessage} from 'react-native-flash-message';

export const Messenger = (message: string, type: any) => {
  showMessage({
    message: message,
    type: type,
    icon: 'auto',
    duration: 2000,
    floating: true,
  });
};
