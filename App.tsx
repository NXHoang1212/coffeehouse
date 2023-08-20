import { View, Text } from 'react-native'
import React from 'react'
import AppNavigate from './src/navigation/app/AppNavigate'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <>
      <AppNavigate />
      <FlashMessage position="top" />
    </>
  )
}

export default App