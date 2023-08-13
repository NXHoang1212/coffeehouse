import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import StyleHomePage from '../../styles/home/StyleHomePage'
import { Logo, category, Icon } from '../../constant/Icon'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const HomePage = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={StyleHomePage.container}>
          <StatusBar backgroundColor='#FFF7E6' barStyle='dark-content' />
          <View style={StyleHomePage.viewheader}>
            <View style={StyleHomePage.headerText}>
              <FastImage style={StyleHomePage.icon} source={category.CLOUDFEE} />
              <Text style={StyleHomePage.textheader}>Hoàng ơi, CloudTea nhé!</Text>
            </View>
            <View style={StyleHomePage.headerIcon}>
              <View style={StyleHomePage.viewpromo}>
                <TouchableOpacity>
                  <Image style={StyleHomePage.iconpromo} source={Icon.PROMO} />
                </TouchableOpacity>
              </View>
              <View style={StyleHomePage.viewbell}>
                <TouchableOpacity>
                  <FastImage style={StyleHomePage.iconbell} source={Icon.NOTIFY} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={StyleHomePage.viewbanner}>
            <Image
              style={StyleHomePage.banner}
              source={Logo.DATINGCOFFEE}
              resizeMode={FastImage.resizeMode.contain}
            />
            <LinearGradient colors={['#FA8C16', '#ff4f0a']} style={StyleHomePage.thecard}>
              <View style={StyleHomePage.viewthecard}>
                <Text style={StyleHomePage.textcardLoginSet}>Đăng Nhập</Text>
                <Text style={StyleHomePage.textcard}>
                  Sử dụng app tích điểm và đổi những ưu đãi chỉ dành riêng cho thành viên bạn nhé !
                </Text>
                <TouchableOpacity style={StyleHomePage.cardLogin}>
                  <Text style={StyleHomePage.textcardLoginSet}>Đăng Nhập</Text>
                </TouchableOpacity>
              </View>
              <Image style={StyleHomePage.card} source={Icon.POINTS} />
            </LinearGradient>
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default HomePage