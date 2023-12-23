import { View, Text, Animated, Image, TouchableOpacity, Pressable, ScrollView, Dimensions, Modal, StatusBar, FlatList, } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Portal } from 'react-native-paper';
import { Icon, category } from '../../constant/Icon';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { StyleSelectModalDataTime } from '../../styles/modal/StyleSelectModalDataTime';
import { DataGayteway } from '../../data/listitem/DataGayteway';
import { TimeHoursGayteway } from '../../data/listitem/DataGayteway';

interface Props {
  show: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
}
const availableTimes = [
  '7:30',
  '8:30',
  '9:30',
  '10:30',
  '11:30',
  '12:30',
  '13:30',
  '14:30',
  '15:30',
  '16:30',
  '17:30',
  '18:30',
  '19:30',
  '20:30',
];

const SelectModalDataTime = ({
  show,
  onDismiss,
  enableBackDropDismiss = true,
}: Props) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const [open, setopen] = useState<boolean>(show);
  const [selectedDate, setSelectedDate] = useState('Hôm nay');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time);
  };
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

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={StyleSelectModalDataTime.backdrop}
      />
      <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
        <Animated.View
          style={[StyleSelectModalDataTime.container, { bottom: bottomsheet }]}>
          <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
          <View style={StyleSelectModalDataTime.header}>
            <Text style={StyleSelectModalDataTime.textitle}>
              Thời gian nhận
            </Text>
            <TouchableOpacity onPress={onDismiss}>
              <Image
                source={Icon.CANCEL}
                style={StyleSelectModalDataTime.iconcancel}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text>Chọn thời gian: {selectedTime}</Text>
          </View>
          <View style={StyleSelectModalDataTime.viewoptiondate}>
            <View>
              <FlatList
                data={['Hôm nay', 'Ngày mai', 'Ngày kế tiếp']}
                horizontal
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleDateSelect(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item}
              />
              <FlatList
                data={availableTimes}
                numColumns={3}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleTimeSelect(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item}
              />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
};

export default SelectModalDataTime;
