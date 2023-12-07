import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

export const PermissionNotication = async () => {
    //đây là cái này để xin quyền truy cập thông báo của thiết bị android
    const authStatus = await messaging().requestPermission();
    //còn đây là cái này để xin quyền truy cập thông báo của thiết bị ios 
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    //nếu quyền truy cập thông báo của thiết bị ios được cấp hoặc được cấp tạm thời thì sẽ in ra màn hình console
    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
    //nếu quyền truy cập thông báo của thiết bị android được cấp thì sẽ in ra màn hình console
    if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        console.log('User has notification permissions enabled.');
    }
    if (authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
        console.log('User has provisional notification permissions.');
    }
    //nếu quyền truy cập thông báo của thiết bị android không được cấp thì sẽ in ra màn hình console
    if (authStatus === messaging.AuthorizationStatus.DENIED) {
        console.log('User has notification permissions disabled');
    }
    //nếu quyền truy cập thông báo của thiết bị android chưa được cấp thì sẽ in ra màn hình console
    if (authStatus === messaging.AuthorizationStatus.NOT_DETERMINED) {
        console.log('User has notification permissions disabled');
    }
        

}