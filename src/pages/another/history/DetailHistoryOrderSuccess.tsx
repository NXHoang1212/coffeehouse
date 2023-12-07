import { View, Text, Animated, Image, TouchableOpacity, Pressable, StatusBar, Dimensions, Modal, ScrollView, Linking } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import StyleDetailHistoryOrderSuccess from '../../../styles/another/StyleDetailHistoryOrderSuccess';
import { Icon } from '../../../constant/Icon';
import { OrderResponse } from '../../../data/types/Order.entity';
import { GetTime } from '../../../utils/Moment';
import { FormatPrice } from '../../../utils/FormatPrice';
import { Messenger } from '../../../utils/ShowMessage';

interface Props {
    show: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    item: OrderResponse
}

const DetailHistoryOrderSuccess = ({ show, onDismiss, enableBackDropDismiss = true, item }: Props) => {
    const bottomsheetHeight = Dimensions.get('window').height * 0.5;
    const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
    const [open, setopen] = useState<boolean>(show);
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
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={StyleDetailHistoryOrderSuccess.backdrop} />
            <Animated.View style={[StyleDetailHistoryOrderSuccess.container, { bottom: bottomsheet }]}>
                <View style={StyleDetailHistoryOrderSuccess.header}>
                    <Text style={StyleDetailHistoryOrderSuccess.textitle}>Trạng thái đơn hàng</Text>
                    <TouchableOpacity onPress={onDismiss}>
                        <Image source={Icon.CANCEL} style={StyleDetailHistoryOrderSuccess.iconcancel} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={StyleDetailHistoryOrderSuccess.body}>
                        <View style={StyleDetailHistoryOrderSuccess.viewimage}>
                            <Image source={Icon.ORDERSTATUS} style={StyleDetailHistoryOrderSuccess.image} />
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.viewpending}>
                            <Text style={StyleDetailHistoryOrderSuccess.textpending}>Thời gian giao dự kiến</Text>
                            <Text style={StyleDetailHistoryOrderSuccess.texttime}>{GetTime(item.date)}</Text>
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewbutton}>
                            <View style={StyleDetailHistoryOrderSuccess.buttontwopayment}>
                                <TouchableOpacity style={StyleDetailHistoryOrderSuccess.buttonpayment} >
                                    <Text style={StyleDetailHistoryOrderSuccess.textbuttonsucess}>Đánh giá</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleDetailHistoryOrderSuccess.buttoncancel} onPress={() => Linking.openURL(`tel:1800 6936`)}>
                                    <Text style={StyleDetailHistoryOrderSuccess.textbuttoncancel}>Gọi hỗ trợ</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={StyleDetailHistoryOrderSuccess.viewchangepayment} onPress={() => Messenger('Có chút lỗi vui lòng thử lại sau', 'error')}>
                                <Text style={StyleDetailHistoryOrderSuccess.textchangepayment}>Đặt lại</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewinformation}>
                            <Text style={StyleDetailHistoryOrderSuccess.textinformation}>Thông tin đơn hàng</Text>
                            <View style={StyleDetailHistoryOrderSuccess.viewuser}>
                                <View style={StyleDetailHistoryOrderSuccess.viewname}>
                                    <Text style={StyleDetailHistoryOrderSuccess.texttitleinformation}>Người nhận</Text>
                                    <Text style={StyleDetailHistoryOrderSuccess.textuser}>{item.user.name}</Text>
                                </View>
                                <View style={StyleDetailHistoryOrderSuccess.lineuser} />
                                <View style={StyleDetailHistoryOrderSuccess.viewmobile}>
                                    <Text style={StyleDetailHistoryOrderSuccess.texttitleinformation}>Số điện thoại</Text>
                                    <Text style={StyleDetailHistoryOrderSuccess.textuser}>{item.user.mobile}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewaddress}>
                            <Text style={StyleDetailHistoryOrderSuccess.texttitleinformation}>Giao đến</Text>
                            <Text style={StyleDetailHistoryOrderSuccess.textaddress}>{item.address}</Text>
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewstatuspayment}>
                            <Text style={StyleDetailHistoryOrderSuccess.texttitleinformation}>Trạng thái thanh toán:</Text>
                            <View style={StyleDetailHistoryOrderSuccess.viewunpaid}>
                                <Text style={StyleDetailHistoryOrderSuccess.textunpaid}>PAiD</Text>
                                <Text style={StyleDetailHistoryOrderSuccess.textaddress}>{item.statusPayment}</Text>
                            </View>
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewtransaction}>
                            <Text style={StyleDetailHistoryOrderSuccess.texttitleinformation}>Mã đơn hàng</Text>
                            <Text style={StyleDetailHistoryOrderSuccess.textaddress}>{item.TransactionId}</Text>
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewproduct}>
                            <Text style={StyleDetailHistoryOrderSuccess.textProduct}>Sản phẩm đã chọn</Text>
                            {item.OrderCart.map((item, index) => {
                                return (
                                    <View key={index} style={StyleDetailHistoryOrderSuccess.viewtitleProduct}>
                                        <Text style={StyleDetailHistoryOrderSuccess.textquantity}>{item.QuantityProduct}</Text>
                                        <View style={StyleDetailHistoryOrderSuccess.viewnameProduct}>
                                            <Text style={StyleDetailHistoryOrderSuccess.textnameproduct}>{item.NameProduct}</Text>
                                            {item?.ToppingProduct?.map((item, index) => {
                                                return (<Text key={index} style={StyleDetailHistoryOrderSuccess.textpending}>{item.name}</Text>);
                                            })}
                                        </View>
                                        <Text style={StyleDetailHistoryOrderSuccess.textprice}>{FormatPrice(item.PriceProduct)}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={StyleDetailHistoryOrderSuccess.line} />
                        <View style={StyleDetailHistoryOrderSuccess.viewtotal}>
                            <Text style={StyleDetailHistoryOrderSuccess.textProduct}>Tổng cộng</Text>
                            <View style={StyleDetailHistoryOrderSuccess.viewamount}>
                                <Text style={StyleDetailHistoryOrderSuccess.textamount}>Thành tiền</Text>
                                <Text style={StyleDetailHistoryOrderSuccess.texttotal}>{FormatPrice(total)}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderSuccess.line} />
                            <View style={StyleDetailHistoryOrderSuccess.viewshipper}>
                                <Text style={StyleDetailHistoryOrderSuccess.textamount}>Phí vận chuyển</Text>
                                <Text style={StyleDetailHistoryOrderSuccess.texttotal}>{FormatPrice(shipper)}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderSuccess.line} />
                            {item.promo ? (
                                <View style={StyleDetailHistoryOrderSuccess.viewpromo}>
                                    <Text style={StyleDetailHistoryOrderSuccess.textamount}>Mã giảm giá</Text>
                                    <Text style={StyleDetailHistoryOrderSuccess.texttotal}>-{FormatPrice(parseInt(item.promo))}</Text>
                                </View>
                            ) : null}
                            <View style={StyleDetailHistoryOrderSuccess.line} />
                            <View style={StyleDetailHistoryOrderSuccess.viewamount}>
                                <Text style={StyleDetailHistoryOrderSuccess.textamount}>Số tiền cần thanh toán</Text>
                                <Text style={StyleDetailHistoryOrderSuccess.texttotal}>{FormatPrice(TotalPrice)}</Text>
                            </View>
                            <View style={StyleDetailHistoryOrderSuccess.line} />
                            <View style={StyleDetailHistoryOrderSuccess.viewmethod}>
                                {item.payment === 'VNPay' && (
                                    <Image source={Icon.VNPAY} style={StyleDetailHistoryOrderSuccess.iconmethod} />
                                )}
                                {item.payment === 'MoMo' && (
                                    <Image source={Icon.MOMO} style={StyleDetailHistoryOrderSuccess.iconmethod} />
                                )}
                                {item.payment === 'ZaloPay' && (
                                    <Image source={Icon.ZALOPAY} style={StyleDetailHistoryOrderSuccess.iconmethod} />
                                )}
                                {item.payment === 'Thẻ ngân hàng' && (
                                    <Image source={Icon.CARDBANK} style={StyleDetailHistoryOrderSuccess.iconmethod} />
                                )}
                                {item.payment === 'Tiền mặt' && (
                                    <Image source={Icon.CASH} style={StyleDetailHistoryOrderSuccess.iconmethod} />
                                )}
                                <Text style={StyleDetailHistoryOrderSuccess.textmethod}>{item.payment}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>
        </Modal>

    );
};

export default DetailHistoryOrderSuccess;
