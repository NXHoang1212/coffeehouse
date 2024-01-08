import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, ImageSourcePropType } from 'react-native';
import React, { memo, useState } from 'react';
import { GetOrder, OrderResponse } from '../../data/types/Order.entity';
import StyleItemStatusOrder from '../../styles/item/StyleItemStatusOrder';
import { Icon, order } from '../../constant/Icon';
import { GetTime } from '../../utils/Moment';
import { FormatPrice } from '../../utils/FormatPrice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import RejectOrder from '../modal/RejectOrder';
import ChangeMethod from '../modal/ChangeMethod';
import FastImage from 'react-native-fast-image';

interface PropsDetailItemProduct {
    item: GetOrder
}

const ItemStatusOrder = memo(({ item }: PropsDetailItemProduct) => {
    const method = useSelector((state: RootState) => state.root.methodamount)
    const shipper = 18
    const total = item.OrderCart.map((item) => item.PriceProduct * item.QuantityProduct).reduce((a, b) => a + b, 0);
    let TotalPrice = total + shipper - parseInt(item.promo)
    const [showReject, setShowReject] = useState<boolean>(false);
    const [showmethod, setShowmethod] = useState<boolean>(false);

    return (
        <View style={StyleItemStatusOrder.container}>
            <View style={StyleItemStatusOrder.viewimage}>
                <FastImage source={Icon.ORDERSTATUS} style={StyleItemStatusOrder.image} />
            </View>
            <View style={StyleItemStatusOrder.body}>
                <View style={StyleItemStatusOrder.viewpending}>
                    <Text style={StyleItemStatusOrder.textpending}>Thời gian giao dự kiến</Text>
                    <Text style={StyleItemStatusOrder.textstatus}>{item.status}</Text>
                </View>
                <View style={StyleItemStatusOrder.viewpaymentpending}>
                    <Text style={StyleItemStatusOrder.texttime}>{GetTime(item.date)}</Text>
                    <View style={StyleItemStatusOrder.viewtextpaymentpending}>
                        <Text style={StyleItemStatusOrder.texttimepending}>Chờ thanh toán</Text>
                        <Text style={StyleItemStatusOrder.texttimestatuspending}>Bạn cần thanh toán đơn hàng này</Text>
                    </View>
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewbutton}>
                    <View style={StyleItemStatusOrder.buttontwopayment}>
                        <TouchableOpacity style={StyleItemStatusOrder.buttonpayment}>
                            <Text style={StyleItemStatusOrder.textbuttonsucess}>Thanh toán</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleItemStatusOrder.buttoncancel} onPress={() => setShowReject(true)}>
                            <Text style={StyleItemStatusOrder.textbuttoncancel}>Hủy đơn</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={StyleItemStatusOrder.viewchangepayment} onPress={() => setShowmethod(true)}>
                        <Text style={StyleItemStatusOrder.textchangepayment}>Đổi phương thức thanh toán</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewinformation}>
                    <Text style={StyleItemStatusOrder.textinformation}>Thông tin đơn hàng</Text>
                    <View style={StyleItemStatusOrder.viewuser}>
                        <View style={StyleItemStatusOrder.viewname}>
                            <Text style={StyleItemStatusOrder.texttitleinformation}>Người nhận</Text>
                            <Text style={StyleItemStatusOrder.textuser}>{item.user.name}</Text>
                        </View>
                        <View style={StyleItemStatusOrder.lineuser} />
                        <View style={StyleItemStatusOrder.viewmobile}>
                            <Text style={StyleItemStatusOrder.texttitleinformation}>Số điện thoại</Text>
                            <Text style={StyleItemStatusOrder.textuser}>{item.user.mobile}</Text>
                        </View>
                    </View>
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewaddress}>
                    <Text style={StyleItemStatusOrder.texttitleinformation}>Giao đến</Text>
                    <Text style={StyleItemStatusOrder.textaddress}>{item.address}</Text>
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewstatuspayment}>
                    <Text style={StyleItemStatusOrder.texttitleinformation}>Trạng thái thanh toán:</Text>
                    <View style={StyleItemStatusOrder.viewunpaid}>
                        <Text style={StyleItemStatusOrder.textunpaid}>UNPAID</Text>
                        <Text style={StyleItemStatusOrder.textaddress}>{item.statusPayment}</Text>
                    </View>
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewtransaction}>
                    <Text style={StyleItemStatusOrder.texttitleinformation}>Mã đơn hàng</Text>
                    <Text style={StyleItemStatusOrder.textaddress}>{item.TransactionId}</Text>
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewproduct}>
                    <Text style={StyleItemStatusOrder.textProduct}>Sản phẩm đã chọn</Text>
                    {item.OrderCart.map((item, index) => {
                        return (
                            <View key={index} style={StyleItemStatusOrder.viewtitleProduct}>
                                <Text style={StyleItemStatusOrder.textquantity}>{item.QuantityProduct}</Text>
                                <View style={StyleItemStatusOrder.viewnameProduct}>
                                    <Text style={StyleItemStatusOrder.textnameproduct}>{item.NameProduct}</Text>
                                    {item?.ToppingProduct?.map((item, index) => {
                                        return (<Text key={index} style={StyleItemStatusOrder.textpending}>{item.name}</Text>);
                                    })}
                                </View>
                                <Text style={StyleItemStatusOrder.textprice}>{FormatPrice(item.PriceProduct)}</Text>
                            </View>
                        );
                    })}
                </View>
                <View style={StyleItemStatusOrder.line} />
                <View style={StyleItemStatusOrder.viewtotal}>
                    <Text style={StyleItemStatusOrder.textProduct}>Tổng cộng</Text>
                    <View style={StyleItemStatusOrder.viewamount}>
                        <Text style={StyleItemStatusOrder.textamount}>Thành tiền</Text>
                        <Text style={StyleItemStatusOrder.texttotal}>{FormatPrice(total)}</Text>
                    </View>
                    <View style={StyleItemStatusOrder.line} />
                    <View style={StyleItemStatusOrder.viewshipper}>
                        <Text style={StyleItemStatusOrder.textamount}>Phí vận chuyển</Text>
                        <Text style={StyleItemStatusOrder.texttotal}>{FormatPrice(shipper)}</Text>
                    </View>
                    <View style={StyleItemStatusOrder.line} />
                    {item.promo ? (
                        <View style={StyleItemStatusOrder.viewpromo}>
                            <Text style={StyleItemStatusOrder.textamount}>Mã giảm giá</Text>
                            <Text style={StyleItemStatusOrder.texttotal}>-{FormatPrice(parseInt(item.promo))}</Text>
                        </View>
                    ) : null}
                    <View style={StyleItemStatusOrder.line} />
                    <View style={StyleItemStatusOrder.viewamount}>
                        <Text style={StyleItemStatusOrder.textamount}>Số tiền cần thanh toán</Text>
                        <Text style={StyleItemStatusOrder.texttotal}>{FormatPrice(TotalPrice)}</Text>
                    </View>
                    <View style={StyleItemStatusOrder.line} />
                    <View style={StyleItemStatusOrder.viewmethod}>
                        <Image source={method.image as ImageSourcePropType} style={StyleItemStatusOrder.iconmethod} />
                        <Text style={StyleItemStatusOrder.textmethod}>{method.name}</Text>
                    </View>
                </View>
            </View>
            <RejectOrder show={showReject} onDismiss={() => setShowReject(false)} enableBackDropDismiss idOrder={item._id} />
            <ChangeMethod show={showmethod} onDismiss={() => setShowmethod(false)} enableBackDropDismiss />
        </View>
    );
});

export default ItemStatusOrder;
