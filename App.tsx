import { View, Text } from 'react-native'
import React from 'react'
import AppNavigate from './src/navigation/app/AppNavigate'
import FlashMessage from 'react-native-flash-message'
import store from './src/redux/store/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/redux/store/Store';

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigate />
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App