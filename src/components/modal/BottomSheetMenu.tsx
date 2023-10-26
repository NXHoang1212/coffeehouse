import { View, Text, Animated, Image, TouchableOpacity, Pressable, StatusBar, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Portal } from 'react-native-paper'
import StyleBottomSheetMenu from '../../styles/modal/StyleBottomSheetMenu'
import { Icon, category } from '../../constant/Icon'
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'

interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    setSelectedCategory: (categoryName: String) => void;
}

const BottomSheetMenu = ({ show, onDismiss, enableBackDropDismiss = true, setSelectedCategory }: Props) => {
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const [open, setopen] = useState<boolean>(show);
    const onGestureEvent = (event: any) => {
        if (event.nativeEvent.translationY > 0) {
            bottomsheet.setValue(-event.nativeEvent.translationY)
        }
    }
    const onGestureEnd = (event: any) => {
        if (event.nativeEvent.translationY > bottomsheetHeight / 2) {
            onDismiss();
        } else {
            bottomsheet.setValue(0);
        }
    }
    useEffect(() => {
        if (show) {
            setopen(show)
            Animated.timing(bottomsheet, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(bottomsheet, {
                toValue: -bottomsheetHeight,
                duration: 500,
                useNativeDriver: false
            }).start(() => {
                setopen(false);
            })
        }
    }, [show])
    if (!open) {
        return null;
    }

    return (
        <Portal>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleBottomSheetMenu.backdrop} />
            <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
            <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
                <Animated.View style={[StyleBottomSheetMenu.container, { bottom: bottomsheet }]}>
                    <View style={StyleBottomSheetMenu.header}>
                        <Text style={StyleBottomSheetMenu.textitle}>Danh mục</Text>
                        <TouchableOpacity onPress={onDismiss}>
                            <Image source={Icon.CANCEL} style={StyleBottomSheetMenu.iconcancel} />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleBottomSheetMenu.line} />
                    <View style={StyleBottomSheetMenu.viewmenu}>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('39K FREESHIP')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.SALE39K} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>FREESHIP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Trà Trái Cây - Trà Sữa')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.TEAMILK} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Trà Sữa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('CloudFee')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.CLOUDFEE} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>CloudFee</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Cà phê')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.COFFEE} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Cà phê</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Trà Xanh Tây Bắc')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.TEAGREEN} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Trà Xanh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Bánh - Snack')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.SNACK} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Bánh Snack</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('CloudTea')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.CLOUDTEA} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>CloudTea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Đá Xay Frosty')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.FORSTY} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Forsty</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Thưởng thức tại nhà')}>
                                <View style={StyleBottomSheetMenu.viewitem}>
                                    <Image source={category.ENJOYHOME} style={StyleBottomSheetMenu.iconitem} />
                                </View>
                                <Text style={StyleBottomSheetMenu.textitem}>Thưởng thức</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleBottomSheetMenu.viewcategory}>
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Hi-Tea Healthy')}>
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
                            <TouchableOpacity style={StyleBottomSheetMenu.handleSale} onPress={() => setSelectedCategory('Thức uống khác')}>
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