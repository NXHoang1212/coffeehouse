import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useRef } from 'react'
import StyleHomePage from '../../styles/home/StyleHomePage'
import { Logo, category, Icon } from '../../constant/Icon'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient';
import ActivityIndicator from '../../components/activity/ActivityIndicator'
import BottomSheetHome from './BottomSheetHome'
import { LoadingScroll } from '../../hooks/Loading'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack'

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const loadingData = LoadingScroll();
  const [showRefresh, setShowRefresh] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFF7E6');
  const onRefresh = () => {
    setShowRefresh(true);
    setTimeout(() => {
      setShowRefresh(false);
      loadingData.setIsLoading(true);
      setTimeout(() => {
        loadingData.setIsLoading(false);
      }, 1000);
    }, 1000);
  }
  const onScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 100) {
      setBackgroundColor('#fff');
    } else {
      setBackgroundColor('#FFF7E6');
    }
  };
  const handeleGeneral = (destination: string) => {
    if (destination === 'DiscountUser') {
      //@ts-ignore
      navigation.navigate('StackHomeNavigate', { screen: 'DiscountUser', })
    } else if (destination === 'Notifee') {
      //@ts-ignore
      navigation.navigate('StackHomeNavigate', { screen: 'Notifee', })
    }
  }
  ThemLightStatusBar('dark-content', backgroundColor);
  return (
    <View style={[StyleHomePage.container, { backgroundColor: backgroundColor }]}>
      <View style={StyleHomePage.viewheader}>
        <View style={StyleHomePage.headerText}>
          <FastImage style={StyleHomePage.icon} source={category.CLOUDFEE} />
          <Text style={StyleHomePage.textheader}>Hoàng ơi, CloudTea nhé!</Text>
        </View>
        <View style={StyleHomePage.headerIcon}>
          <TouchableOpacity style={StyleHomePage.viewpromo} onPress={() => handeleGeneral('DiscountUser')}>
            <Image style={StyleHomePage.iconpromo} source={Icon.PROMO} />
          </TouchableOpacity>
          <TouchableOpacity style={StyleHomePage.viewbell} onPress={() => handeleGeneral('Notifee')}>
            <FastImage style={StyleHomePage.iconbell} source={Icon.NOTIFY} />
          </TouchableOpacity>
        </View>
      </View>
      {loadingData.isLoading && <ActivityIndicator />}
      <ScrollView showsVerticalScrollIndicator={false} onScroll={onScroll} contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={showRefresh} onRefresh={onRefresh} />}>
        <View style={StyleHomePage.viewbody}>
          <LinearGradient colors={['#FA8C16', '#fd7e14']} style={StyleHomePage.viewbodycard}>
            <View style={StyleHomePage.viewtextcard}>
              <Text style={StyleHomePage.texttitlecard}>Đăng Nhập</Text>
              <Text style={StyleHomePage.textcard}>Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho thành viên bạn nhé!</Text>
              <TouchableOpacity style={StyleHomePage.viewlogincard}>
                <Text style={StyleHomePage.textlogincard}>Đăng nhập</Text>
              </TouchableOpacity>
              <Image style={StyleHomePage.iconpoints} source={Icon.POINTS} />
            </View>
          </LinearGradient>
          <View style={StyleHomePage.viewimagecard}>
            <Image style={StyleHomePage.imagecard} source={Logo.DATINGCOFFEE} />
          </View>
        </View>
        <BottomSheetHome />
      </ScrollView>
    </View >
  )
}

export default HomePage