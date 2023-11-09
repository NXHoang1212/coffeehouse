import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigate from './src/navigation/app/AppNavigate'
import FlashMessage from 'react-native-flash-message'
import store, { AppDispatch } from './src/redux/store/Store'
import { Provider as StoreProvider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/redux/store/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { socket } from './src/utils/Socket'
import { ProductContextProvider } from './src/service/provider/ProductContext';
import { ApplyPromoContextProvider } from './src/service/provider/ApplyPromoContext'

const App = (): JSX.Element => {
  useEffect(() => {
    socket.on("connection", (data) => {
      console.log("Received data from server:", data);
    });
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
  )
}

export default App