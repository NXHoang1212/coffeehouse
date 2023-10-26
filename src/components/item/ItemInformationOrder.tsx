import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Icon, infores } from '../../constant/Icon';
import React, { useState, useEffect } from 'react'
import StyleItemInformationOrder from '../../styles/item/StyleItemInformationOrder';
import { GetCartOrder } from '../../data/types/CartOrder.entity';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { useRoute } from '@react-navigation/native';
import { FormatPrice } from '../../utils/FormatPrice';
import { Swipeable } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import BottomUpdateOrder from '../../pages/order/BottomUpdateOrder';
import MethodAmount from '../modal/MethodAmount';
import { useDeleteAllCartMutation, useDeleteCartProductIdMutation } from '../../service/api/IndexCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';

interface PropsDetailItemProduct {
    item: GetCartOrder;
}

const ItemInformationOrder: React.FC<PropsDetailItemProduct> = ({ item }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const route = useRoute<any>();
    const address = route.params?.item;
    const id = useSelector((state: RootState) => state.user.user._id);
    const method = useSelector((state: RootState) => state.methodamount.methodamount);
    const [openModal, setopenModal] = useState<boolean>(false);
    const [note, setNote] = useState<string>('');
    const [show, setshow] = useState<boolean>(false);
    const [SelectProduct, setSelectProduct] = useState<any>(undefined);
    const shipper = 18;
    const [DeleteAllCart] = useDeleteAllCartMutation();
    const [DeleteCartProductId] = useDeleteCartProductIdMutation();
    const SelectedAddress = () => {
        //@ts-ignore
        navigation.navigate('StackHomeNavigate', { screen: 'SelectedAddressOrder' })
    }
    const UpdateUserOrder = () => {
        //@ts-ignore
        navigation.navigate('StackHomeNavigate', { screen: 'UpdateOrderUser', params: { item: item } })
    }
    const handleShowBottomSheet = (item: any) => {
        setSelectProduct(item);
        setshow(true);
    }
    const renderright = (product: any) => {
        const ProductId: number = product._id
        return (
            <View style={StyleItemInformationOrder.viewitemswipe}>
                <TouchableOpacity style={StyleItemInformationOrder.viewswipeedit} onPress={() => handleShowBottomSheet(product)} >
                    <Image source={infores.EDIT} style={StyleItemInformationOrder.icondelete} />
                </TouchableOpacity>
                <TouchableOpacity style={StyleItemInformationOrder.viewswipedelete} onPress={() => DeleteCartProductId({ id, ProductId })}>
                    <Image source={Icon.DELETE} style={StyleItemInformationOrder.icondelete} />
                </TouchableOpacity>
            </View>
        );
    };
    const TotalPrice = () => {
        let total = 0;
        item?.ProductId.map((product) => {
            total += product.PriceProduct
        })
        return total;
    }
    const TotalAllPrice = () => {
        return TotalPrice() + shipper;
    }
    return (
        <View style={StyleItemInformationOrder.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                <View style={StyleItemInformationOrder.header}>
                    <Text style={StyleItemInformationOrder.texttilte}>Giao hàng tận nơi</Text>
                    <TouchableOpacity style={StyleItemInformationOrder.viewdelete} onPress={() => DeleteAllCart(item._id)}>
                        <Text style={StyleItemInformationOrder.textedit}>Xóa đơn hàng</Text>
                    </TouchableOpacity>
                </View>
                {address ? (
                    <View style={StyleItemInformationOrder.viewaddress}>
                        <View style={StyleItemInformationOrder.viewtextaddress}>
                            <Text style={StyleItemInformationOrder.textdetailaddress}>{address.DescribeAddRess}</Text>
                        </View>
                        <TouchableOpacity style={StyleItemInformationOrder.vieweditaddress} onPress={() => SelectedAddress()}>
                            <Image source={Icon.RIGHT} style={StyleItemInformationOrder.iconedit} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={StyleItemInformationOrder.viewaddress} onPress={SelectedAddress}>
                        <Text style={StyleItemInformationOrder.textaddress}>Vui lòng chọn địa chỉ giao tới</Text>
                    </TouchableOpacity>
                )}
                <TextInput
                    placeholder='Thêm hướng dẫn cho shipper....'
                    style={StyleItemInformationOrder.textinput}
                    onChangeText={(text) => setNote(text)}
                    value={note}
                />
                <View style={StyleItemInformationOrder.itemuser}>
                    <TouchableOpacity onPress={UpdateUserOrder}>
                        <Text style={StyleItemInformationOrder.textuser}>{item?.UserId.name}</Text>
                        <Text style={StyleItemInformationOrder.textuser}>{item?.UserId.mobile}</Text>
                        <Text style={StyleItemInformationOrder.textline}>----------------------------</Text>
                    </TouchableOpacity>
                    <View style={StyleItemInformationOrder.viewline} />
                    <View>
                        <Text style={StyleItemInformationOrder.textuser}>15-45 phút</Text>
                        <Text style={StyleItemInformationOrder.textuser}>Càng sớm càng tốt</Text>
                        <Text style={StyleItemInformationOrder.textline}>----------------------------</Text>
                    </View>
                </View>
                <View style={StyleItemInformationOrder.linespace} />
                <View style={StyleItemInformationOrder.viewproduct}>
                    <View style={StyleItemInformationOrder.viewheaderproduct}>
                        <Text style={StyleItemInformationOrder.textheaderchoose}>Sản phẩm đã chọn</Text>
                        {/* @ts-ignore */}
                        <TouchableOpacity style={StyleItemInformationOrder.viewtouchplus} onPress={() => navigation.navigate('TabHomeNavigate', { screen: 'Đặt hàng' })}>
                            <Image source={Icon.PLUS} style={StyleItemInformationOrder.iconplus} />
                            <Text style={StyleItemInformationOrder.textheaderproduct}>Thêm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={StyleItemInformationOrder.viewitemproduct}>
                        {item?.ProductId.map((product, index) => (
                            <Swipeable renderRightActions={() => renderright(product)} key={index}>
                                <View style={StyleItemInformationOrder.itemproduct}>
                                    <View >
                                        <Image source={infores.EDIT} style={StyleItemInformationOrder.iconedit} />
                                    </View>
                                    <View>
                                        <Text style={StyleItemInformationOrder.textnameproduct}>x{product.QuantityProduct} {product.NameProduct}</Text>
                                        {product.SizeProduct ? (
                                            <Text style={StyleItemInformationOrder.texttoppingproduct}>{product.SizeProduct.name}</Text>
                                        ) : null}
                                        {product.ToppingProduct ? (
                                            product.ToppingProduct.map((topping, index) => (
                                                <Text style={StyleItemInformationOrder.texttoppingproduct} key={index}>{topping.name}</Text>
                                            ))
                                        ) : null}
                                        {product.NoteProduct ? (
                                            <Text style={StyleItemInformationOrder.texttoppingproduct}>{product.NoteProduct}</Text>
                                        ) : null}
                                    </View>
                                    <View style={StyleItemInformationOrder.viewpriceproduct}>
                                        <Text style={StyleItemInformationOrder.textpriceproduct}>{FormatPrice(product.PriceProduct)}</Text>
                                    </View>
                                </View>
                                {index === item.ProductId.length - 1 ? null : (
                                    <View style={StyleItemInformationOrder.viewlineprogess} />
                                )}
                            </Swipeable>
                        ))}
                    </View>
                </View>
                <View style={StyleItemInformationOrder.linespace} />
                <View style={StyleItemInformationOrder.viewtotal}>
                    <Text style={StyleItemInformationOrder.texttotal}>Tổng cộng</Text>
                </View>
                <View style={StyleItemInformationOrder.viewtotalprice}>
                    <Text style={StyleItemInformationOrder.texindex}>Thành Tiền</Text>
                    <Text style={StyleItemInformationOrder.texindex}>{FormatPrice(TotalPrice())}</Text>
                </View>
                <View style={StyleItemInformationOrder.viewlinetotalprogess} />
                <View style={StyleItemInformationOrder.viewtotalshipper}>
                    <Text style={StyleItemInformationOrder.texindex}>Phí giao hàng</Text>
                    <Text style={StyleItemInformationOrder.texindex}>{FormatPrice(shipper)}</Text>
                </View>
                <View style={StyleItemInformationOrder.viewlinetotalprogess} />
                <View style={StyleItemInformationOrder.viewdiscount}>
                    <Text style={StyleItemInformationOrder.texindex}>Mã giảm giá</Text>
                    <Text style={StyleItemInformationOrder.texindex}>0đ</Text>
                </View>
                <View style={StyleItemInformationOrder.viewlinetotalprogess} />
                <View style={StyleItemInformationOrder.viewamount}>
                    <Text style={StyleItemInformationOrder.texindex}>Số tiền thanh toán</Text>
                    <Text style={StyleItemInformationOrder.texindex}>{FormatPrice(TotalAllPrice())}</Text>
                </View>
                <View style={StyleItemInformationOrder.linespace} />
                <View style={StyleItemInformationOrder.viewchooseamount}>
                    <Text style={StyleItemInformationOrder.textamount}>Thanh Toán</Text>
                    <TouchableOpacity style={StyleItemInformationOrder.viewmethod} onPress={() => setopenModal(true)}>
                        {method.image ? (
                            <Image source={method.image ? method.image : null} style={StyleItemInformationOrder.iconmethod} />
                        ) : (
                            <Image source={Icon.METHOD} style={StyleItemInformationOrder.iconmethod} />
                        )}
                        {method.name ? (
                            <Text style={StyleItemInformationOrder.textmethod}>{method.name}</Text>
                        ) : (
                            <Text style={StyleItemInformationOrder.textmethod}>Chọn phương thức thanh toán</Text>
                        )}
                        <Image source={Icon.RIGHT} style={StyleItemInformationOrder.iconright} />
                    </TouchableOpacity>
                </View>
                <LinearGradient style={StyleItemInformationOrder.viewbutton} colors={['#FA8C16', '#FA8C16']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <View>
                        <Text style={StyleItemInformationOrder.textbutton}>Giao hàng {item?.ProductId ? item?.ProductId.length : 0} sản phẩm</Text>
                        <Text style={StyleItemInformationOrder.textbutton}>{FormatPrice(TotalAllPrice())}</Text>
                    </View>
                    <TouchableOpacity style={StyleItemInformationOrder.vieworder}>
                        <Text style={StyleItemInformationOrder.textorder}>Đặt hàng</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
            <BottomUpdateOrder show={show} onDismiss={() => setshow(false)} ProductId={SelectProduct} />
            <MethodAmount openModal={openModal} onDismiss={() => setopenModal(false)} />
        </View >
    )
}

export default ItemInformationOrder


