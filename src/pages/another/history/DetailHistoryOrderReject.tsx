import { View, Text, Animated, Image, TouchableOpacity, Pressable, StatusBar, Dimensions, } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Portal } from 'react-native-paper';
import { PanGestureHandler, } from 'react-native-gesture-handler';
import StyleDetailHistoryOrderReject from '../../../styles/another/StyleDetailHistoryOrderReject';
import { Icon } from '../../../constant/Icon';
import { OrderResponse } from '../../../data/types/Order.entity';

interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    item: OrderResponse
}

const DetailHistoryOrderReject = ({ show, onDismiss, enableBackDropDismiss = true, item }: Props) => {
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const [open, setopen] = useState<boolean>(show);
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
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleDetailHistoryOrderReject.backdrop} />
            <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
            <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
                <Animated.View
                    style={[StyleDetailHistoryOrderReject.container, { bottom: bottomsheet }]}>
                    <View style={StyleDetailHistoryOrderReject.header}>
                        <Text style={StyleDetailHistoryOrderReject.textitle}>Trạng thái đơn hàng</Text>
                        <TouchableOpacity onPress={onDismiss}>
                            <Image source={Icon.CANCEL} style={StyleDetailHistoryOrderReject.iconcancel} />
                        </TouchableOpacity>
                    </View>

                </Animated.View>
            </PanGestureHandler>
        </Portal>
    );
};

export default DetailHistoryOrderReject;
