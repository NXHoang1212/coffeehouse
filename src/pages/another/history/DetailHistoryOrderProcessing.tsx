import { View, Text, Animated, Image, TouchableOpacity, Pressable, StatusBar, Dimensions, ScrollView, Modal, ImageSourcePropType } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Portal } from 'react-native-paper';
import { PanGestureHandler, } from 'react-native-gesture-handler';
import StyleDetailHistoryOrderProcessing from '../../../styles/another/StyleDetailHistoryOrderProcessing';
import { Icon } from '../../../constant/Icon';
import { Order, OrderResponse } from '../../../data/types/Order.entity';
import { FormatPrice } from '../../../utils/FormatPrice';
import { GetTime } from '../../../utils/Moment';
import RejectOrder from '../../../components/modal/RejectOrder';
import ChangeMethod from '../../../components/modal/ChangeMethod';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/Store';

interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    item: OrderResponse
}

const DetailHistoryOrderProcessing = ({ show, onDismiss, enableBackDropDismiss = true, item }: Props) => {
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const [open, setopen] = useState<boolean>(show);
    const method = useSelector((state: RootState) => state.methodamount.methodamount)
    const [showReject, setShowReject] = useState<boolean>(false);
    const [showmethod, setShowmethod] = useState<boolean>(false);
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

    let shipper = 18
    const total = item.OrderCart.map((item) => item.PriceProduct * item.QuantityProduct).reduce((a, b) => a + b, 0);
    let TotalPrice = total + shipper - parseInt(item.promo)

    return (
        <Modal animationType="fade" transparent={true} onRequestClose={onDismiss} hardwareAccelerated={true} statusBarTranslucent={true}>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleDetailHistoryOrderProcessing.backdrop} />
            <Animated.View style={[StyleDetailHistoryOrderProcessing.container, { bottom: bottomsheet }]}>
                <View style={StyleDetailHistoryOrderProcessing.header}>
                    <Text style={StyleDetailHistoryOrderProcessing.textitle}>Trạng thái đơn hàng</Text>
                    <TouchableOpacity onPress={onDismiss}>
                        <Image source={Icon.CANCEL} style={StyleDetailHistoryOrderProcessing.iconcancel} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={StyleDetailHistoryOrderProcessing.body}>
                        <View style={StyleDetailHistoryOrderProcessing.viewimage}>
                            <Image source={Icon.ORDERSTATUS} style={StyleDetailHistoryOrderProcessing.image} />
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.viewpending}>
                            <Text style={StyleDetailHistoryOrderProcessing.textpending}>Thời gian giao dự kiến</Text>
                            <Text style={StyleDetailHistoryOrderProcessing.textstatus}>{item.status}</Text>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.viewpaymentpending}>
                            <Text style={StyleDetailHistoryOrderProcessing.texttime}>{GetTime(item.date)}</Text>
                            <View style={StyleDetailHistoryOrderProcessing.viewtextpaymentpending}>
                                <Text style={StyleDetailHistoryOrderProcessing.texttimepending}>Chờ thanh toán</Text>
                                <Text style={StyleDetailHistoryOrderProcessing.texttimestatuspending}>Bạn cần thanh toán  đơn hàng này</Text>
                            </View>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewbutton}>
                            <View style={StyleDetailHistoryOrderProcessing.buttontwopayment}>
                                <TouchableOpacity style={StyleDetailHistoryOrderProcessing.buttonpayment}>
                                    <Text style={StyleDetailHistoryOrderProcessing.textbuttonsucess}>Thanh toán</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleDetailHistoryOrderProcessing.buttoncancel} onPress={() => setShowReject(true)}>
                                    <Text style={StyleDetailHistoryOrderProcessing.textbuttoncancel}>Hủy đơn</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={StyleDetailHistoryOrderProcessing.viewchangepayment} onPress={() => setShowmethod(true)}>
                                <Text style={StyleDetailHistoryOrderProcessing.textchangepayment}>Đổi phương thức thanh toán</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewinformation}>
                            <Text style={StyleDetailHistoryOrderProcessing.textinformation}>Thông tin đơn hàng</Text>
                            <View style={StyleDetailHistoryOrderProcessing.viewuser}>
                                <View style={StyleDetailHistoryOrderProcessing.viewname}>
                                    <Text style={StyleDetailHistoryOrderProcessing.texttitleinformation}>Người nhận</Text>
                                    <Text style={StyleDetailHistoryOrderProcessing.textuser}>{item.user.name}</Text>
                                </View>
                                <View style={StyleDetailHistoryOrderProcessing.lineuser} />
                                <View style={StyleDetailHistoryOrderProcessing.viewmobile}>
                                    <Text style={StyleDetailHistoryOrderProcessing.texttitleinformation}>Số điện thoại</Text>
                                    <Text style={StyleDetailHistoryOrderProcessing.textuser}>{item.user.mobile}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewaddress}>
                            <Text style={StyleDetailHistoryOrderProcessing.texttitleinformation}>Giao đến</Text>
                            <Text style={StyleDetailHistoryOrderProcessing.textaddress}>{item.address}</Text>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewstatuspayment}>
                            <Text style={StyleDetailHistoryOrderProcessing.texttitleinformation}>Trạng thái thanh toán:</Text>
                            <View style={StyleDetailHistoryOrderProcessing.viewunpaid}>
                                <Text style={StyleDetailHistoryOrderProcessing.textunpaid}>UNPAID</Text>
                                <Text style={StyleDetailHistoryOrderProcessing.textaddress}>{item.statusPayment}</Text>
                            </View>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewtransaction}>
                            <Text style={StyleDetailHistoryOrderProcessing.texttitleinformation}>Mã đơn hàng</Text>
                            <Text style={StyleDetailHistoryOrderProcessing.textaddress}>{item.TransactionId}</Text>
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewproduct}>
                            <Text style={StyleDetailHistoryOrderProcessing.textProduct}>Sản phẩm đã chọn</Text>
                            {item.OrderCart.map((item, index) => {
                                return (
                                    <View key={index} style={StyleDetailHistoryOrderProcessing.viewtitleProduct}>
                                        <Text style={StyleDetailHistoryOrderProcessing.textquantity}>{item.QuantityProduct}</Text>
                                        <View style={StyleDetailHistoryOrderProcessing.viewnameProduct}>
                                            <Text style={StyleDetailHistoryOrderProcessing.textnameproduct}>{item.NameProduct}</Text>
                                            {item?.ToppingProduct?.map((item, index) => {
                                                return (<Text key={index} style={StyleDetailHistoryOrderProcessing.textpending}>{item.name}</Text>);
                                            })}
                                        </View>
                                        <Text style={StyleDetailHistoryOrderProcessing.textprice}>{FormatPrice(item.PriceProduct)}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={StyleDetailHistoryOrderProcessing.line} />
                        <View style={StyleDetailHistoryOrderProcessing.viewtotal}>
                            <Text style={StyleDetailHistoryOrderProcessing.textProduct}>Tổng cộng</Text>
                            <View style={StyleDetailHistoryOrderProcessing.viewamount}>
                                <Text style={StyleDetailHistoryOrderProcessing.textamount}>Thành tiền</Text>
                                <Text style={StyleDetailHistoryOrderProcessing.texttotal}>{FormatPrice(total)}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderProcessing.line} />
                            <View style={StyleDetailHistoryOrderProcessing.viewshipper}>
                                <Text style={StyleDetailHistoryOrderProcessing.textamount}>Phí vận chuyển</Text>
                                <Text style={StyleDetailHistoryOrderProcessing.texttotal}>{FormatPrice(shipper)}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderProcessing.line} />
                            {item.promo ? (
                                <View style={StyleDetailHistoryOrderProcessing.viewpromo}>
                                    <Text style={StyleDetailHistoryOrderProcessing.textamount}>Mã giảm giá</Text>
                                    <Text style={StyleDetailHistoryOrderProcessing.texttotal}>-{FormatPrice(parseInt(item.promo))}</Text>
                                </View>
                            ) : null}
                            <View style={StyleDetailHistoryOrderProcessing.line} />
                            <View style={StyleDetailHistoryOrderProcessing.viewamount}>
                                <Text style={StyleDetailHistoryOrderProcessing.textamount}>Số tiền cần thanh toán</Text>
                                <Text style={StyleDetailHistoryOrderProcessing.texttotal}>{FormatPrice(TotalPrice)}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderProcessing.line} />
                            <View style={StyleDetailHistoryOrderProcessing.viewmethod}>
                                <Image source={method.image as ImageSourcePropType} style={StyleDetailHistoryOrderProcessing.iconmethod} />
                                <Text style={StyleDetailHistoryOrderProcessing.textmethod}>{method.name}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>
            <ChangeMethod show={showmethod} onDismiss={() => setShowmethod(false)} enableBackDropDismiss />
            <RejectOrder show={showReject} onDismiss={() => setShowReject(false)} enableBackDropDismiss idOrder={item._id} />
        </Modal>
    );
};

export default DetailHistoryOrderProcessing;
