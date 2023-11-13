import { View, Text } from 'react-native'
import React from 'react'
import StyleStatusOrder from '../../../styles/another/StlyeStatusOrder'

const StatusOrder: React.FC = () => {
    return (
        <View style={StyleStatusOrder.container}>
            <Text>Trạng thái đơn hàng</Text>
        </View>
    )
}

export default StatusOrder