import { AppRegistry } from 'react-native';
import App from './App';
import Main from './Main';
import { name as appName } from './app.json';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

messaging().getToken().then(token => {
    console.log('FCM Token', token);
});

messaging().onTokenRefresh(token => {
    console.log('FCM Token Changed', token);
});


notifee.onBackgroundEvent(({ type, detail }) => {
    if (type === EventType.BACKGROUND_ACTION_PRESS) {
        console.log('User pressed background action', detail.notification);
    } else if (type === EventType.BACKGROUND_ACTION_DISMISS) {
        console.log('User dismissed background action', detail.notification);
    } else if (type === EventType.BACKGROUND_ACTION_CLICK) {
        console.log('User clicked background action', detail.notification);
    }
});

notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.FOREGROUND_NOTIFICATION_PRESS) {
        console.log('User pressed foreground notification', detail);
    } else if (type === EventType.FOREGROUND_NOTIFICATION_ACTION_PRESS) {
        console.log('User pressed foreground notification action', detail);
    } else if (type === EventType.FOREGROUND_NOTIFICATION_DISMISS) {
        console.log('User dismissed foreground notification', detail);
    }
});



AppRegistry.registerComponent(appName, () => Main);
