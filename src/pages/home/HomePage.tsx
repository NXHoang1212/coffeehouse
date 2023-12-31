import { Text, View, Image, TouchableOpacity, StatusBar, ScrollView, RefreshControl, NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import StyleHomePage from '../../styles/home/StyleHomePage';
import { Icon } from '../../constant/Icon';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheetHome from './BottomSheetHome';
import { useGetDiscountQuery } from '../../service/api/IndexDiscount';
import { useScrollToTop } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { GetCurrentHour } from '../../utils/Moment';
import { DataWellcome } from '../../data/types/Enum.entity';
import IconNotify from '../../assets/Svg/IconNotify';
import IconPromo from '../../assets/Svg/IconPromo';
import IconDatingCoffee from '../../assets/Svg/IconDatingCoffee';
import { COLOR } from '../../constant/Color';

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();

  const isLoggedIn = useSelector((state: RootState) => state.root.isLoggedIn.isLoggedIn);

  const scroll = useRef<ScrollView | null>(null);

  useScrollToTop(scroll);

  const [backgroundColor, setBackgroundColor] = useState<string>('#FFF7E6');

  const { data } = useGetDiscountQuery();
  const count = data?.data.length;

  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor(backgroundColor);

  const updateStatusBar = (color: string) => {
    StatusBar.setBackgroundColor(color);
    setBackgroundColor(color);
  };
  const scrollY = useRef(new Animated.Value(0)).current;
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newOffsetY = event.nativeEvent.contentOffset.y;
    if (newOffsetY > 100) {
      updateStatusBar('#fff');
      Animated.timing(scrollY, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      updateStatusBar('#FFF7E6');
      Animated.timing(scrollY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(backgroundColor);
    });
    return unsubscribe;
  }, [navigation, backgroundColor]);


  return (
    <View style={[StyleHomePage.container, { backgroundColor: backgroundColor }]}>
      <View style={StyleHomePage.viewheader}>
        <View style={StyleHomePage.headerText}>
          <FastImage style={StyleHomePage.icon} source={{ uri: GetCurrentHour().imageSource as any }} />
          {isLoggedIn ? (
            <Text style={StyleHomePage.textheader}>{GetCurrentHour().greeting}</Text>
          ) : (
            <Text style={StyleHomePage.textheader}>{DataWellcome.NOLOGIN}</Text>
          )}
        </View>
        <View style={StyleHomePage.headerIcon}>
          <TouchableOpacity style={StyleHomePage.viewpromo}
            onPress={() => navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'DiscountUser' } as any)}>
            <IconPromo style={StyleHomePage.iconpromo} fill={COLOR.ORANGEBOLD} />
            {isLoggedIn ? (
              <Text style={StyleHomePage.textpromo}>{count}</Text>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={StyleHomePage.viewbell}
            onPress={() => navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'Notifee' } as any)}>
            <IconNotify style={StyleHomePage.iconbell} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scroll}
        onScroll={onScroll}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => { }} />
        }>
        <View style={StyleHomePage.viewbody}>
          <LinearGradient colors={['#FA8C16', '#fd7e14']} style={StyleHomePage.viewbodycard}>
            <View style={StyleHomePage.viewtextcard}>
              <Text style={StyleHomePage.texttitlecard}>Đăng Nhập</Text>
              <Text style={StyleHomePage.textcard}>
                Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho
                thành viên bạn nhé!
              </Text>
              <TouchableOpacity style={StyleHomePage.viewlogincard} onPress={() => navigation.navigate('AuthStackUser', { screen: 'Login' } as any)}>
                <Text style={StyleHomePage.textlogincard}>Đăng nhập</Text>
              </TouchableOpacity>
              <Image style={StyleHomePage.iconpoints} source={Icon.POINTS} />
            </View>
          </LinearGradient>
          <View style={StyleHomePage.viewimagecard}>
            <IconDatingCoffee style={StyleHomePage.imagecard} />
          </View>
        </View>
        <BottomSheetHome />
      </ScrollView>
    </View >
  );
};

export default HomePage;
