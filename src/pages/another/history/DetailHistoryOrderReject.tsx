import { View, Text, Animated, Image, TouchableOpacity, Pressable, StatusBar, Dimensions, ScrollView, Modal } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Portal } from 'react-native-paper';
import { PanGestureHandler, } from 'react-native-gesture-handler';
import StyleDetailHistoryOrderReject from '../../../styles/another/StyleDetailHistoryOrderReject';
import { Icon } from '../../../constant/Icon';
import { OrderResponse } from '../../../data/types/Order.entity';
import { FormatPrice } from '../../../utils/FormatPrice';
import { GetTime } from '../../../utils/Moment';

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
    let shipper = 18
    const total = item.OrderCart.map((item) => item.PriceProduct * item.QuantityProduct).reduce((a, b) => a + b, 0);
    let TotalPrice = total + shipper - parseInt(item.promo)
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
        <Modal visible={open} transparent={true} animationType="fade">
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
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={StyleDetailHistoryOrderReject.body}>
                            <View style={StyleDetailHistoryOrderReject.viewimage}>
                                <Image source={Icon.ORDERSTATUS} style={StyleDetailHistoryOrderReject.image} />
                            </View>
                            <View style={StyleDetailHistoryOrderReject.viewpending}>
                                <Text style={StyleDetailHistoryOrderReject.textpending}>Thời gian giao dự kiến</Text>
                                <Text style={StyleDetailHistoryOrderReject.textstatus}>{item.status}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderReject.viewpaymentpending}>
                                <Text style={StyleDetailHistoryOrderReject.texttime}>{GetTime(item.date)}</Text>
                                <View style={StyleDetailHistoryOrderReject.viewtextpaymentpending}>
                                    <Text style={StyleDetailHistoryOrderReject.texttimepending}>Hủy đơn</Text>
                                    <Text style={StyleDetailHistoryOrderReject.texttimestatuspending}>Đơn hàng được hủy. Lý do: {item.reason}</Text>
                                </View>
                            </View>
                            <View style={StyleDetailHistoryOrderReject.line} />
                            <View style={StyleDetailHistoryOrderReject.viewinformation}>
                                <Text style={StyleDetailHistoryOrderReject.textinformation}>Thông tin đơn hàng</Text>
                                <View style={StyleDetailHistoryOrderReject.viewuser}>
                                    <View style={StyleDetailHistoryOrderReject.viewname}>
                                        <Text style={StyleDetailHistoryOrderReject.texttitleinformation}>Người nhận</Text>
                                        <Text style={StyleDetailHistoryOrderReject.textuser}>{item.user.name}</Text>
                                    </View>
                                    <View style={StyleDetailHistoryOrderReject.lineuser} />
                                    <View style={StyleDetailHistoryOrderReject.viewmobile}>
                                        <Text style={StyleDetailHistoryOrderReject.texttitleinformation}>Số điện thoại</Text>
                                        <Text style={StyleDetailHistoryOrderReject.textuser}>{item.user.mobile}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={StyleDetailHistoryOrderReject.line} />
                            <View style={StyleDetailHistoryOrderReject.viewaddress}>
                                <Text style={StyleDetailHistoryOrderReject.texttitleinformation}>Giao đến</Text>
                                <Text style={StyleDetailHistoryOrderReject.textaddress}>{item.address}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderReject.line} />
                            <View style={StyleDetailHistoryOrderReject.viewstatuspayment}>
                                <Text style={StyleDetailHistoryOrderReject.texttitleinformation}>Trạng thái thanh toán:</Text>
                                <View style={StyleDetailHistoryOrderReject.viewunpaid}>
                                    <Text style={StyleDetailHistoryOrderReject.textunpaid}>UNPAID</Text>
                                    <Text style={StyleDetailHistoryOrderReject.textaddress}>{item.statusPayment}</Text>
                                </View>
                            </View>
                            <View style={StyleDetailHistoryOrderReject.line} />
                            <View style={StyleDetailHistoryOrderReject.viewtransaction}>
                                <Text style={StyleDetailHistoryOrderReject.texttitleinformation}>Mã đơn hàng</Text>
                                <Text style={StyleDetailHistoryOrderReject.textaddress}>{item.TransactionId}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderReject.line} />
                            <View style={StyleDetailHistoryOrderReject.viewproduct}>
                                <Text style={StyleDetailHistoryOrderReject.textProduct}>Sản phẩm đã chọn</Text>
                                {item.OrderCart.map((item, index) => {
                                    return (
                                        <View key={index} style={StyleDetailHistoryOrderReject.viewtitleProduct}>
                                            <Text style={StyleDetailHistoryOrderReject.textquantity}>{item.QuantityProduct}</Text>
                                            <View style={StyleDetailHistoryOrderReject.viewnameProduct}>
                                                <Text style={StyleDetailHistoryOrderReject.textnameproduct}>{item.NameProduct}</Text>
                                                {item?.ToppingProduct?.map((item, index) => {
                                                    return (<Text key={index} style={StyleDetailHistoryOrderReject.textpending}>{item.name}</Text>);
                                                })}
                                            </View>
                                            <Text style={StyleDetailHistoryOrderReject.textprice}>{FormatPrice(item.PriceProduct)}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <View style={StyleDetailHistoryOrderReject.line} />
                            <View style={StyleDetailHistoryOrderReject.viewtotal}>
                                <Text style={StyleDetailHistoryOrderReject.textProduct}>Tổng cộng</Text>
                                <View style={StyleDetailHistoryOrderReject.viewamount}>
                                    <Text style={StyleDetailHistoryOrderReject.textamount}>Thành tiền</Text>
                                    <Text style={StyleDetailHistoryOrderReject.texttotal}>{FormatPrice(total)}</Text>
                                </View>
                                <View style={StyleDetailHistoryOrderReject.line} />
                                <View style={StyleDetailHistoryOrderReject.viewshipper}>
                                    <Text style={StyleDetailHistoryOrderReject.textamount}>Phí vận chuyển</Text>
                                    <Text style={StyleDetailHistoryOrderReject.texttotal}>{FormatPrice(shipper)}</Text>
                                </View>
                                <View style={StyleDetailHistoryOrderReject.line} />
                                {item.promo ? (
                                    <View style={StyleDetailHistoryOrderReject.viewpromo}>
                                        <Text style={StyleDetailHistoryOrderReject.textamount}>Mã giảm giá</Text>
                                        <Text style={StyleDetailHistoryOrderReject.texttotal}>-{FormatPrice(parseInt(item.promo))}</Text>
                                    </View>
                                ) : null}
                                <View style={StyleDetailHistoryOrderReject.line} />
                                <View style={StyleDetailHistoryOrderReject.viewamount}>
                                    <Text style={StyleDetailHistoryOrderReject.textamount}>Số tiền cần thanh toán</Text>
                                    <Text style={StyleDetailHistoryOrderReject.texttotal}>{FormatPrice(TotalPrice)}</Text>
                                </View>
                                <View style={StyleDetailHistoryOrderReject.line} />
                                <View style={StyleDetailHistoryOrderReject.viewmethod}>
                                    {item.payment === 'VNPay' && (
                                        <Image source={Icon.VNPAY} style={StyleDetailHistoryOrderReject.iconmethod} />
                                    )}
                                    {item.payment === 'MoMo' && (
                                        <Image source={Icon.MOMO} style={StyleDetailHistoryOrderReject.iconmethod} />
                                    )}
                                    {item.payment === 'ZaloPay' && (
                                        <Image source={Icon.ZALOPAY} style={StyleDetailHistoryOrderReject.iconmethod} />
                                    )}
                                     {item.payment === 'Thẻ ngân hàng' && (
                                        <Image source={Icon.CARDBANK} style={StyleDetailHistoryOrderReject.iconmethod} />
                                    )}
                                    <Text style={StyleDetailHistoryOrderReject.textmethod}>{item.payment}</Text>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </Animated.View>
            </PanGestureHandler>
        </Modal>
    );
};

export default DetailHistoryOrderReject;
