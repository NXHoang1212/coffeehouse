import { View, Text, Animated, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Portal } from 'react-native-paper'
import StyleBottomSheetMenu from '../../styles/modal/StyleBottomSheetMenu'
import { Icon, category } from '../../constant/Icon'
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'

const BottomSheetMenu = ({ show, onDismiss, enableBackDropDismiss }: any) => {
    const [open, setopen] = useState<boolean>(show);
    const bottom = useRef(new Animated.Value(-1000)).current;
    useEffect(() => {
        if (show) {
            setopen(show);
            Animated.timing(bottom, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(bottom, {
                toValue: -1000,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setopen(false);
            })
        }
    }, [show]);
    if (!open) {
        return null;
    }
    const onGesture = (event: any) => {
        if (event.nativeEvent.translationY > 0) {
            bottom.setValue(-event.nativeEvent.translationY)
        }
    }
    const onGestureEnd = (event: any) => {
        if (event.nativeEvent.translationY > 0) {
            if (event.nativeEvent.translationY >= 100) {
                onDismiss();
            } else {
                bottom.setValue(0)
            }
        }
    }
    return (
        <Portal>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleBottomSheetMenu.backdrop} />
            <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
                <Animated.View style={[StyleBottomSheetMenu.container]}>
                    <View style={StyleBottomSheetMenu.header}>
                        <Text style={StyleBottomSheetMenu.textitle}>Danh mục</Text>
                        <TouchableOpacity onPress={onDismiss}>
                            <Image source={Icon.CANCEL} style={StyleBottomSheetMenu.iconcancel} />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleBottomSheetMenu.line} />
                    <View style={StyleBottomSheetMenu.viewmenu}>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.SALE39K} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Cà phê</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.TEAMILK} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Trà Sữa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.CLOUDFEE} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>CloudFeed</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.COFFEE} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Cà phê</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.TEAGREEN} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Trà Xanh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.SNACK} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Bánh Snack</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.CLOUDTEA} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>CloudTea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.FORSTY} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Forsty</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.ENJOYHOME} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Thưởng thức</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.TEAPEACH} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Hi-Tea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.TIME} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Gần đây</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.OTHER} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Uống khác</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </Portal >
    )
}

export default BottomSheetMenu