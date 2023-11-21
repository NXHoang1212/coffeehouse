import React from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import StyleConfirmOrderPayment from '../../styles/modal/StyleConfirmOrderPayment';
import { GetDelivery } from '../../utils/Moment';
import { MethodAmountState } from '../../redux/slices/MethodAmountSlice';

interface ModalConfirmPaymentProps {
    visible: boolean;
    onDismiss: () => void;
    enableBackDropDismiss?: boolean;
    address: string;
    handlePayment: () => void;
}

interface Address {
    DescribeAddRess: string;
}

const ConfirmOrderPayment: React.FC<ModalConfirmPaymentProps & { address: Address }> = ({ visible, onDismiss, enableBackDropDismiss, address, handlePayment }) => {
    const time = GetDelivery();
    const DescribeAddRess = address.DescribeAddRess.slice(0, address.DescribeAddRess.lastIndexOf(','));
    return (
        <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={onDismiss} hardwareAccelerated={true} statusBarTranslucent={true}>
            <Pressable
                onPress={enableBackDropDismiss ? onDismiss : undefined}
                style={StyleConfirmOrderPayment.backdrop}>
                <View style={StyleConfirmOrderPayment.modalContainer}>
                    <View style={StyleConfirmOrderPayment.body}>
                        <Text style={StyleConfirmOrderPayment.texttitle}> Xác nhận thông tin đơn hàng</Text>
                        <Text style={StyleConfirmOrderPayment.textbody}>Đơn hàng sẽ được giao tới chỗ bạn vào lúc {time} hôm nay tại địa điểm {DescribeAddRess}</Text>
                    </View>
                    <View style={StyleConfirmOrderPayment.viewbutton}>
                        <TouchableOpacity onPress={onDismiss}>
                            <Text style={StyleConfirmOrderPayment.textindex}>Thay đổi thông tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePayment}>
                            <Text style={StyleConfirmOrderPayment.textindex}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};

export default ConfirmOrderPayment;
