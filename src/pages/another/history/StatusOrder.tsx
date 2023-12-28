import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import StyleStatusOrder from '../../../styles/another/StlyeStatusOrder'
import { Icon } from '../../../constant/Icon'
import { useGoBack } from '../../../utils/GoBack'
import { useGetOrderQuery } from '../../../service/api/IndexOrder'
import ItemStatusOrder from '../../../components/item/ItemStatusOrder'
import { OrderResponse } from '../../../data/types/Order.entity'
import { useRoute } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const StatusOrder = () => {
    const route = useRoute() 
    const { id } = route?.params as any
    const goback = useGoBack()
    const data = useGetOrderQuery(id)
    const dataOrder = data?.data?.data

    return (
        <View style={StyleStatusOrder.container}>
            <View style={StyleStatusOrder.viewheader}>
                <Text style={StyleStatusOrder.textHeader}>Trạng thái đơn hàng</Text>
                <TouchableOpacity onPress={() => goback()}>
                    <FastImage source={Icon.CANCEL} style={StyleStatusOrder.iconBack} />
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