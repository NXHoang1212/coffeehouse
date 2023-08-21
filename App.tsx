import { View, Text } from 'react-native'
import React from 'react'
import AppNavigate from './src/navigation/app/AppNavigate'
import FlashMessage from 'react-native-flash-message'
import LoginUser from './src/pages/auth/LoginUser'

const App = () => {
  return (
    <>
      <LoginUser />
      {/* <AppNavigate />
      <FlashMessage position="top" /> */}
    </>
  )
}

export default App