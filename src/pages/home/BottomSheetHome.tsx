import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import StyleBottomSheetHome from '../../styles/home/StyleBottomSheetHome'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

const BottomSheetHome = () => {
    const { height: SRCEEN_HEIGTH } = Dimensions.get('window');
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        }).onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -SRCEEN_HEIGTH);
        }).onEnd(() => {
            if (translateY.value < -SRCEEN_HEIGTH / 2) {
                translateY.value = withTiming(-SRCEEN_HEIGTH)
            } else if (translateY.value > -SRCEEN_HEIGTH / 2) {
                translateY.value = withTiming(-SRCEEN_HEIGTH / 1.9)
            }
        })

    const RBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    })
    useEffect(() => {
        translateY.value = withTiming(-SRCEEN_HEIGTH / 1.9)
    }, [])
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[StyleBottomSheetHome.container, RBottomSheetStyle]}>
                <View style={StyleBottomSheetHome.line} />
            </Animated.View>
        </GestureDetector>
    )
}

export default BottomSheetHome