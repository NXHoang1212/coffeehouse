import React, { useEffect } from 'react';
import AppNavigate from './src/navigation/app/AppNavigate';
import FlashMessage from 'react-native-flash-message';
import store from './src/redux/store/Store';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { socket } from './src/utils/Socket';
import { ProductContextProvider } from './src/service/provider/ProductContext';
import { ApplyPromoContextProvider } from './src/service/provider/ApplyPromoContext';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import notifee, { AndroidImportance, AndroidStyle } from '@notifee/react-native';
import { PermissionNoticationAndroid, PermissionNoticationIos } from './src/utils/PermissionNotication';

const App = (): JSX.Element => {

  useEffect(() => {
    socket.on('connection', data => {
      console.log('Received data from server:', data);
    });
  }), [];

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const channelId = await notifee.createChannel({
        id: 'important',
        name: 'Important Notifications',
        sound: 'default',
        importance: AndroidImportance.HIGH,
        badge: false,
        vibration: true,
        vibrationPattern: [300, 500],
      });
      notifee.displayNotification({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        android: {
          channelId,
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
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider>
              <ProductContextProvider>
                <ApplyPromoContextProvider>
                  <FlashMessage position="top" />
                  <AppNavigate />
                </ApplyPromoContextProvider>
              </ProductContextProvider>
            </PaperProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </StoreProvider>
    </>
  );
};

export default App;
