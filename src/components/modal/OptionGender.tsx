import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import StyleOptionGender from '../../styles/modal/StyleOptionGender';
import LinearGradient from 'react-native-linear-gradient';

interface ModalOptionProps {
    visible: boolean;
    //void là không trả về gì cả
    onClose: () => void;
    onSelectGender: (gender: string) => void;
}

const ModalOptionGender: React.FC<ModalOptionProps> = ({ visible, onClose, onSelectGender }) => {
    return (
        <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
            <LinearGradient colors={['#e8e3e3', '#e8e3e3']} style={StyleOptionGender.modalContainer}>
                <View style={StyleOptionGender.modalContent}>
                    <Text style={StyleOptionGender.modalTitle}>Giới tính của bạn?</Text>
                    <View style={StyleOptionGender.line} />
                    <TouchableOpacity onPress={() => onSelectGender('Nam')}>
                        <Text style={StyleOptionGender.modalOptionText}>Nam</Text>
                    </TouchableOpacity>
                    <View style={StyleOptionGender.line} />
                    <TouchableOpacity onPress={() => onSelectGender('Nữ')}>
                        <Text style={StyleOptionGender.modalOptionText}>Nữ</Text>
                    </TouchableOpacity>
                    <View style={StyleOptionGender.line} />
                    <TouchableOpacity onPress={onClose}>
                        <Text style={StyleOptionGender.modalCloseText}>Hủy bỏ</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </Modal>
    );
};

export default ModalOptionGender;
