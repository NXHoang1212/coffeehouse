import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Animated, TouchableOpacity, ImageSourcePropType, } from 'react-native';
import { Banner } from '../../constant/Icon';
import { WIDTH, HEIGHT } from '../../constant/Responsive';
import Paginations from './Paginations';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabHomeNavigateEnum, TabHomeParamList } from '../../data/types/TypesTab';

const data = [
  {
    id: '1',
    image: Banner.SALE39K,
    destination: 'Đặt hàng',
  },
  {
    id: '2',
    image: Banner.DISCOUNT40,
    destination: 'Đặt hàng',
  },
  {
    id: '3',
    image: Banner.DISCOUNT50,
    destination: 'Đặt hàng',
  },
  {
    id: '4',
    image: Banner.CLICKHERE,
    destination: 'Đặt hàng',
  },
  {
    id: '5',
    image: Banner.TRADEBEAN,
    destination: 'Ưu đãi',
  },
];
type Destination = {
  id: string;
  image: ImageSourcePropType;
  destination: string;
};

const BannerSlider = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TabHomeParamList>>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const viewconfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slideRef = useRef<FlatList<{ destination: string; id: string; image: ImageSourcePropType; }> | null>(null);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const viewableItemsChange = useRef(({ viewableItems }: any) => { setCurrentIndex(viewableItems[0].index) }).current;

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay && slideRef.current) {
        const nextIndex = (currentIndex + 1) % data.length;
        if (currentIndex === data.length - 1 && nextIndex === 0) {
          slideRef.current.scrollToIndex({ index: 0 });
        } else {
          slideRef.current.scrollToIndex({ index: nextIndex });
        }
        setCurrentIndex(nextIndex);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [autoplay, currentIndex]);
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollx } } }],
    { useNativeDriver: false },
  );
  const handleImagePress = (item: Destination) => {
    const destination = item.destination;
    navigation.navigate(destination as TabHomeNavigateEnum);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewimage} onPress={() => handleImagePress(item)}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onViewableItemsChanged={viewableItemsChange}
        viewabilityConfig={viewconfig}
        ref={slideRef}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
      />
      <View>
        <Paginations data={data} scrollx={scrollx} />
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
