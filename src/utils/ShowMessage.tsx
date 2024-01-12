import { showMessage } from 'react-native-flash-message';

// export const Messenger = (message: string, type: any) => {
//   showMessage({
//     message: message,
//     type: type,
//     icon: 'auto',
//     duration: 2000,
//     floating: true,
//   });
// };


export class Messenger {
  static success(message: string) {
    showMessage({
      message: message,
      type: 'success',
      icon: 'auto',
      duration: 2000,
      floating: true,
    });
  }

  static error(message: string) {
    showMessage({
      message: message,
      type: 'danger',
      icon: 'auto',
      duration: 2000,
      floating: true,
    });
  }

  static warning(message: string) {
    showMessage({
      message: message,
      type: 'warning',
      icon: 'auto',
      duration: 2000,
      floating: true,
    });
  }

  static info(message: string) {
    showMessage({
      message: message,
      type: 'info',
      icon: 'auto',
      duration: 2000,
      floating: true,
    });
  }

  static danger(message: string) {
    showMessage({
      message: message,
      type: 'danger',
      icon: 'auto',
      duration: 2000,
      floating: true,
    });
  }
}