import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import StyleStatusOrder from '../../../styles/another/StlyeStatusOrder'
import { Icon } from '../../../constant/Icon'
import { useGoBack } from '../../../utils/GoBack'
import { useGetOrderQuery } from '../../../service/api/IndexOrdert'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store/Store'
import ItemStatusOrder from '../../../components/item/ItemStatusOrder'
import { OrderResponse } from '../../../data/types/Order.entity'

const StatusOrder = () => {
    const goback = useGoBack()
    const id = useSelector((state: RootState) => state.Order._id);
    const data = useGetOrderQuery(id)
    const dataOrder = data?.data?.data
    console.log("🚀 ~ file: StatusOrder.tsx:18 ~ StatusOrder ~ dataOrder:", dataOrder)

    return (
        <View style={StyleStatusOrder.container}>
            <View style={StyleStatusOrder.viewheader}>
                <Text style={StyleStatusOrder.textHeader}>Trạng thái đơn hàng</Text>
                <TouchableOpacity onPress={() => goback()}>
                    <Image source={Icon.CANCEL} style={StyleStatusOrder.iconBack} />
                </TouchableOpacity>
            </View>
            <View style={StyleStatusOrder.viewbody}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 70 }} showsVerticalScrollIndicator={false}>
                    {dataOrder?.map((item: OrderResponse, index: number) => {
                        return (<ItemStatusOrder item={item} key={index} />)
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default StatusOrder