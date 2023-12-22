import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

export const PermissionNoticationIos = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    } else {
        console.log('Authorization status:', authStatus);
    }
}

export const PermissionNoticationAndroid = async () => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION,
        {
            title: 'Notification Permission',
            message: 'This app requires access to your notification.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the notification');
    } else {
        console.log('Notification permission denied');
    }
}