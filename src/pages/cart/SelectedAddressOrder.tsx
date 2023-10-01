import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleSelectedAddressOrder } from '../../styles/cart/StyleSelectedAddressOrder'
import { Icon } from '../../constant/Icon'
import { FlashList } from '@huunguyen312/flash-list'
import ItemSelectedAddressOrder from '../../components/item/ItemSelectedAddressOrder'
import { GetApiAddress } from '../../service/api/IndexAddress'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/Store'

const SelectedAddressOrder: React.FC = () => {

    const [data, setData] = useState<any>([])
    const id = useSelector((state: RootState) => state.user.user._id)
    const getAddress = async () => {
        try {
            const response = await GetApiAddress(id)
            setData(response)
            console.log(response)
        } catch (error: any) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAddress()
    }, [])

    return (
        <View style={StyleSelectedAddressOrder.container}>
            <Text style={StyleSelectedAddressOrder.textheader}>Chọn địa chỉ giao hàng</Text>
            <FlashList
                data={data}
                renderItem={({ item }) => <ItemSelectedAddressOrder address={item} />}
                keyExtractor={(item: any) => item._id}
                estimatedItemSize={100}
            />
        </View>
    )
}

export default SelectedAddressOrder