import notifee, { AndroidImportance, AndroidStyle } from '@notifee/react-native';

export const GeneralNotification = () => {
    notifee.createChannel({
        id: 'important',
        name: 'Important Notifications',
        sound: 'default',
        importance: AndroidImportance.HIGH,
        badge: true,
        vibration: true,
        vibrationPattern: [300, 500],
    });
    notifee.displayNotification({
        body: "Chào mừng bạn đến với ứng dụng của chúng tôi",
        android: {
            channelId: 'important',
            pressAction: {
                id: 'default',
                launchActivity: 'default',
            },
            sound: 'default',
            smallIcon: 'ic_launcher_round',
            importance: AndroidImportance.HIGH,
            autoCancel: true,
            vibrationPattern: [300, 500],
        },
    });
};

