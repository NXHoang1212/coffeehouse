import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import StyleBottomSheetHome from '../../styles/home/StyleBottomSheetHome';
import {order, Banner} from '../../constant/Icon';
import FastImage from 'react-native-fast-image';
import BannerSlider from '../../components/banner/Advertisement';
import {ActiveTab} from '../../hooks/ActiveTab';
import {DataSpecial} from '../../data/listitem/homepage/DataSpecial';
import ItemWebView from '../../components/item/ItemWebView';
import {FlashList} from '@huunguyen312/flash-list';
import {DataRefreshHome} from '../../data/listitem/homepage/DataRefreshHome';
import {DataCoffeLover} from '../../data/listitem/homepage/DataCoffeeLover';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackHomeNavigateTypeParam} from '../../data/types/TypeStack';

const BottomSheetHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const {activeTab, handleActiveTab} = ActiveTab('Tab 1');
  const MemoziedItemWebView = useMemo(() => ItemWebView, []);
  return (
    <View style={StyleBottomSheetHome.container}>
      <View style={StyleBottomSheetHome.line} />
      <View style={StyleBottomSheetHome.vieworder}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Đặt hàng' as any)}>
          <View style={StyleBottomSheetHome.viewshipper}>
            <FastImage
              source={order.SHIPPER}
              style={StyleBottomSheetHome.imgshipper}
            />
            <Text style={StyleBottomSheetHome.textshipper}>Giao Hàng</Text>
          </View>
        </TouchableOpacity>
        <View style={StyleBottomSheetHome.lineship} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Đặt hàng' as any)}>
          <View style={StyleBottomSheetHome.viewbringship}>
            <View style={StyleBottomSheetHome.viewimgbringship}>
              <Image
                source={order.CARRIEDAWAY}
                style={StyleBottomSheetHome.imgbringship}
              />
            </View>
            <Text style={StyleBottomSheetHome.textbringship}>Mang đi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={StyleBottomSheetHome.viewbanner}>
        <BannerSlider />
      </View>
      <View style={StyleBottomSheetHome.viewbean}>
        <Text style={StyleBottomSheetHome.textbean}>Đổi Bean</Text>
        <TouchableOpacity>
          <View style={StyleBottomSheetHome.viewimgbean}>
            <FastImage
              source={Banner.DISCOUNT40}
              style={StyleBottomSheetHome.imgbean}
            />
            <View style={StyleBottomSheetHome.viewtext}>
              <Text style={StyleBottomSheetHome.texttitlebean}>
                Hi-Tea Kombucha Detox size M chỉ 35k
              </Text>
              <Text style={StyleBottomSheetHome.textbeanproduct}>
                The Coffee House
              </Text>
              <View style={StyleBottomSheetHome.viewpricebean}>
                <Text style={StyleBottomSheetHome.textbeanprice}>590</Text>
                <Text style={StyleBottomSheetHome.textbeanproduct}>Bean</Text>
              </View>
            </View>
            <View style={StyleBottomSheetHome.viewchangebean}>
              <Text style={StyleBottomSheetHome.textchangebean}>Đổi</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={StyleBottomSheetHome.viewsuggest}>
        <Text style={StyleBottomSheetHome.textsuggest}>
          Gợi ý dành riêng cho bạn
        </Text>
      </View>
      <View style={StyleBottomSheetHome.viewdiscover}>
        <View style={StyleBottomSheetHome.viewimgdiscover}>
          <Text style={StyleBottomSheetHome.textdiscover}>Khám phá thêm</Text>
          <Image source={order.STAR} style={StyleBottomSheetHome.imgdiscover} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={StyleBottomSheetHome.viewtabdiscover}>
            <TouchableOpacity
              style={[
                StyleBottomSheetHome.tabcontainer,
                activeTab === 'Tab 1' ? StyleBottomSheetHome.activeTab : null,
              ]}
              onPress={() => handleActiveTab('Tab 1')}>
              <Text
                style={[
                  StyleBottomSheetHome.texttab,
                  activeTab === 'Tab 1'
                    ? StyleBottomSheetHome.activeText
                    : null,
                ]}>
                Ưu đãi đặc biệt
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                StyleBottomSheetHome.tabcontainer,
                activeTab === 'Tab 2' ? StyleBottomSheetHome.activeTab : null,
              ]}
              onPress={() => handleActiveTab('Tab 2')}>
              <Text
                style={[
                  StyleBottomSheetHome.texttab,
                  activeTab === 'Tab 2'
                    ? StyleBottomSheetHome.activeText
                    : null,
                ]}>
                Cập nhật từ nhà
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                StyleBottomSheetHome.tabcontainer,
                activeTab === 'Tab 3' ? StyleBottomSheetHome.activeTab : null,
              ]}
              onPress={() => handleActiveTab('Tab 3')}>
              <Text
                style={[
                  StyleBottomSheetHome.texttab,
                  activeTab === 'Tab 3'
                    ? StyleBottomSheetHome.activeText
                    : null,
                ]}>
                #CofeeLover
              </Text>
            </TouchableOpacity>
          </View>
          <View style={StyleBottomSheetHome.viewspace} />
        </ScrollView>
      </View>
      {activeTab === 'Tab 1' ? (
        <View style={StyleBottomSheetHome.viewtabspecial}>
          <FlashList
            numColumns={2}
            data={DataSpecial}
            renderItem={({item}) => <MemoziedItemWebView item={item} />}
            keyExtractor={item => item.id}
            estimatedItemSize={200}
          />
        </View>
      ) : activeTab === 'Tab 2' ? (
        <View style={StyleBottomSheetHome.viewtabfreshhome}>
          <FlashList
            numColumns={2}
            data={DataRefreshHome}
            renderItem={({item}) => <MemoziedItemWebView item={item} />}
            keyExtractor={item => item.id}
            estimatedItemSize={200}
          />
        </View>
      ) : activeTab === 'Tab 3' ? (
        <View style={StyleBottomSheetHome.viewtabcoffelover}>
          <FlashList
            numColumns={2}
            data={DataCoffeLover}
            renderItem={({item}) => <MemoziedItemWebView item={item} />}
            keyExtractor={item => item.id}
            estimatedItemSize={200}
          />
        </View>
      ) : null}
    </View>
  );
};

export default BottomSheetHome;
