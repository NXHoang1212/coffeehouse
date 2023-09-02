import { View, Text } from 'react-native'
import React from 'react'
import AppNavigate from './src/navigation/app/AppNavigate'
import FlashMessage from 'react-native-flash-message'
import store from './src/redux/store/Store'
import { Provider } from 'react-redux'

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <AppNavigate />
        <FlashMessage position="top" />
      </Provider>
    </>
  )
}

export default App