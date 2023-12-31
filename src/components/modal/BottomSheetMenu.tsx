import { View, Text, Animated, Image, TouchableOpacity, Pressable, StatusBar, Dimensions, FlatList } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Portal } from 'react-native-paper';
import StyleBottomSheetMenu from '../../styles/modal/StyleBottomSheetMenu';
import { Icon } from '../../constant/Icon';
import { PanGestureHandler, GestureHandlerRootView, } from 'react-native-gesture-handler';
import { useGetCategoryQuery } from '../../service/api/IndexBanner&Category';
import FastImage from 'react-native-fast-image';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
  setSelectedCategory: (categoryName: String) => void;
}

const BottomSheetMenu = ({ show, onDismiss, enableBackDropDismiss = true, setSelectedCategory, }: Props) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const [open, setopen] = useState<boolean>(show);
  const { data } = useGetCategoryQuery();
  const categories = data?.data || [];
  const onGestureEvent = (event: any) => {
    if (event.nativeEvent.translationY > 0) {
      bottomsheet.setValue(-event.nativeEvent.translationY);
    }
  };
  const onGestureEnd = (event: any) => {
    if (event.nativeEvent.translationY > bottomsheetHeight / 2) {
      onDismiss();
    } else {
      bottomsheet.setValue(0);
    }
  };
  useEffect(() => {
    if (show) {
      setopen(show);
      Animated.timing(bottomsheet, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottomsheet, {
        toValue: -bottomsheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setopen(false);
      });
    }
  }, [show]);
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleBottomSheetMenu.backdrop} />
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
        <Animated.View
          style={[StyleBottomSheetMenu.container, { bottom: bottomsheet }]}>
          <View style={StyleBottomSheetMenu.header}>
            <Text style={StyleBottomSheetMenu.textitle}>Danh mục</Text>
            <TouchableOpacity onPress={onDismiss}>
              <FastImage
                source={Icon.CANCEL}
                style={StyleBottomSheetMenu.iconcancel}
              />
            </TouchableOpacity>
          </View>
          <View style={StyleBottomSheetMenu.line} />
          <View style={StyleBottomSheetMenu.viewmenu}>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelectedCategory(item.name)}>
                  <View style={StyleBottomSheetMenu.viewcategory}>
                    <View style={StyleBottomSheetMenu.viewitem}>
                      <FastImage
                        source={{
                          uri: item.image as string,
                          priority: FastImage.priority.normal,
                          cache: FastImage.cacheControl.immutable,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        style={StyleBottomSheetMenu.iconitem}
                      />
                    </View>
                    <Text style={StyleBottomSheetMenu.textitem}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              contentContainerStyle={StyleBottomSheetMenu.viewcontent}
              numColumns={4}
              keyExtractor={(item, index) => item._id + index}
              showsVerticalScrollIndicator={false}
              extraData={categories}
              removeClippedSubviews={true}
              viewabilityConfig={{
                waitForInteraction: true,
                itemVisiblePercentThreshold: 50,
                minimumViewTime: 1000,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Portal>
  );
};

export default BottomSheetMenu;
