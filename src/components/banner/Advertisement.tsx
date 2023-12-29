import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Animated, TouchableOpacity, ImageSourcePropType, } from 'react-native';
import { Banner } from '../../constant/Icon';
import { WIDTH, HEIGHT } from '../../constant/Responsive';
import Paginations from './Paginations';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabHomeNavigateEnum, TabHomeParamList } from '../../data/types/TypesTab';
import { useGetBannerQuery } from '../../service/api/IndexBanner&Category';
import FastImage from 'react-native-fast-image';



const BannerSlider = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TabHomeParamList>>();
  const { data } = useGetBannerQuery();
  const banner = data?.data.slice(0, 5) || [];
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const scrollx = useRef(new Animated.Value(0)).current;
  const viewconfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slideRef = useRef<FlatList<{ image: string; name: string; _id: string; }>>(null);
  const viewableItemsChange = useRef(({ viewableItems }: any) => { setCurrentIndex(viewableItems[0].index) }).current;
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < banner.length - 1) {
        slideRef?.current?.scrollToIndex({ index: currentIndex + 1 });
      } else {
        slideRef?.current?.scrollToIndex({ index: 0 });
      }
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollx } } }],
    { useNativeDriver: false },
  );
  const handleImagePress = (item: any) => {
    const destination = item.name;
    navigation.navigate(destination as TabHomeNavigateEnum);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={banner}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewimage} onPress={() => handleImagePress(item)}>
            <FastImage
              source={{
                uri: item.image as string,
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.cover} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item._id + index}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        horizontal={true}
        onViewableItemsChanged={viewableItemsChange}
        viewabilityConfig={viewconfig}
        ref={slideRef}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
      />
      <View>
        <Paginations data={banner} scrollx={scrollx} />
      </View>
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewimage: {
    elevation: 6,
    height: HEIGHT(17.8),
    top: HEIGHT(2),
    borderRadius: 15,
    shadowRadius: 4,
    marginHorizontal: WIDTH(5),
  },
  image: {
    width: WIDTH(90),
    height: HEIGHT(18),
    borderRadius: 9,
    resizeMode: 'contain',
  },
});
