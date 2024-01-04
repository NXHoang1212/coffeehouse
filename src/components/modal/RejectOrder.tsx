import { View, Text, Modal, Pressable, StatusBar, Animated, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../../constant/Icon';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { CheckBoxBorder } from '../custom/CheckBox';
import StyleRejectOrder from '../../styles/modal/StyleRejectOrder';
import { Portal } from 'react-native-paper';
import { DataRejectOrder } from '../../data/listitem/DataRejectOrder';
import { useUpdateOrderMutation } from '../../service/api/IndexOrder';
import { Messenger } from '../../utils/ShowMessage';
import { Order, OrderResponse } from '../../data/types/Order.entity';
import { OrderStatus, PaymentStatus } from '../../data/types/Enum.entity';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';

interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    idOrder: string;
}

const RejectOrder: React.FC<Props> = ({ show, onDismiss, enableBackDropDismiss = true, idOrder }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam, 'TabHomeNavigate'>>();
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const [open, setopen] = useState<boolean>(show);
    const [reason, setReason] = useState<string>('');
    const [UpdateOrder] = useUpdateOrderMutation();
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

    const update = async () => {
        if (reason === '') {
            Messenger('Vui lòng chọn lý do hủy đơn hàng', 'error');
        } else {
            const updatedOrder: OrderResponse = {
                _id: idOrder,
                OrderCart: [
                    {
                        NameProduct: '',
                        PriceProduct: 0,
                        QuantityProduct: 0,
                        NoteProduct: '',
                        ToppingProduct: [],
                        SizeProduct: [],
                    },
                ],
                user: null,
                address: '',
                note: '',
                promo: '',
                payment: '',
                status: OrderStatus.CANCELLED,
                statusPayment: '',
                date: new Date(),
                TransactionId: '',
                reason: reason,
            };
            const reponse = await UpdateOrder(updatedOrder)
            if (reponse) {
                Messenger('Hủy đơn hàng thành công', 'success');
                navigation.navigate('TabHomeNavigate' as any, { screen: 'Other' });
            } else (error: any) => {
                console.log(error.message);
                Messenger('Hủy đơn hàng thất bại', 'error');
            }
        }
    };


    if (!open) {
        return null;
    }
    return (
        <Modal animationType="fade" transparent={true} onRequestClose={onDismiss} hardwareAccelerated={true}>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleRejectOrder.backdrop} />
            <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
            <Animated.View style={[StyleRejectOrder.container, { bottom: bottomsheet }]}>
                <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
                    <TouchableOpacity style={StyleRejectOrder.header}>
                        <Text style={StyleRejectOrder.texttitle}>Hủy đơn hàng</Text>
                        <Image source={Icon.CANCEL} style={StyleRejectOrder.iconcancel} />
                    </TouchableOpacity>
                </PanGestureHandler>
                <View style={StyleRejectOrder.line} />
                <View style={StyleRejectOrder.body}>
                    <Text style={StyleRejectOrder.textbody}>Vui lòng chọn lý do hủy</Text>
                    {DataRejectOrder.map((item, index) => {
                        return (
                            <View key={index}>
                                <View style={StyleRejectOrder.viewoption}>
                                    <View style={StyleRejectOrder.viewcheckbox}>
                                        <CheckBoxBorder
                                            onPress={() => setReason(item.name)}
                                            checked={reason === item.name}
                                        />
                                    </View>
                                    <Text style={StyleRejectOrder.textbody}>{item.name}</Text>
                                </View>
                                {index === DataRejectOrder.length - 1 ? null : <View style={StyleRejectOrder.lineitem} />}
                            </View>
                        )
                    })}
                    <View style={StyleRejectOrder.viewpolicy}>
                        <Text style={StyleRejectOrder.textpolicy}>Đơn hàng đã thanh toán online thành công sẽ được hoàn tiền tối đã từ 7 ngày (thẻ ATM, ví điện tử) đến 45 ngày (thẻ quốc tế)</Text>
                        <TouchableOpacity style={StyleRejectOrder.viewbutton} onPress={update}>
                            <Text style={StyleRejectOrder.textreject}>Hủy đơn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </Modal >
    );
};

export default RejectOrder;
