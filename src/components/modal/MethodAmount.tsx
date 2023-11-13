import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {StyleMethodAmount} from '../../styles/modal/StyleMethodAmount';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store/Store';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/Store';
import {AddMethodAmount} from '../../redux/slices/MethodAmountSlice';
import {DataMethod} from '../../data/listitem/DataMethod';
import {CheckBox} from 'react-native-elements';

interface Props {
  openModal: boolean;
  onDismiss: () => void;
  enableBackDropDismiss?: boolean;
}

const MethodAmount: React.FC<Props> = ({
  openModal,
  onDismiss,
  enableBackDropDismiss = true,
}) => {
  const bottomsheetHeight = Dimensions.get('window').height * 0.5;
  const bottomsheet = useRef(new Animated.Value(-bottomsheetHeight)).current;
  const [open, setopen] = useState<boolean>(openModal);
  const methodAmount = useSelector(
    (state: RootState) => state.methodamount.methodamount,
  );
  const data = DataMethod.map((item: any, index: number) => {
    return {
      id: index,
      Title: item.Title,
      name: item.name,
      nameheader: item.nameheader,
      iconTitle: item.iconTitle,
      icon: item.iconName,
      image: item.image,
    };
  });
  const dispatch = useDispatch<AppDispatch>();
  const handleAddMethodAmount = (item: any) => {
    dispatch(
      AddMethodAmount({
        name: item.name,
        image: item.icon,
      }),
    );
    onDismiss();
  };

  useEffect(() => {
    if (openModal) {
      setopen(openModal);
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
  }, [openModal]);
  if (!open) {
    return null;
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={onDismiss}
      hardwareAccelerated={true}
      statusBarTranslucent={true}>
      <Pressable
        onPress={enableBackDropDismiss ? onDismiss : undefined}
        style={StyleMethodAmount.backdrop}
      />
      <Animated.View
        style={[StyleMethodAmount.container, {bottom: bottomsheet}]}>
        <View style={StyleMethodAmount.header}>
          <Text style={StyleMethodAmount.texttile}>{data[0].Title}</Text>
          <TouchableOpacity onPress={() => onDismiss()}>
            {data[0].iconTitle ? (
              <Image
                source={data[0].iconTitle}
                style={StyleMethodAmount.iconcancel}
              />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={StyleMethodAmount.viewbody}>
          <View style={StyleMethodAmount.viewoptionbody}>
            <Text style={StyleMethodAmount.textbodyoption}>
              {data[1].nameheader}
            </Text>
          </View>
          <View style={StyleMethodAmount.viewchoosepayment}>
            <Text style={StyleMethodAmount.textchoosepayment}>
              Cách thanh toán
            </Text>
            <View style={StyleMethodAmount.viewoptionpayment}>
              {data
                .filter(item => item.name && item.icon)
                .map((item: any, index: number) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        style={StyleMethodAmount.viewoption}
                        onPress={() => handleAddMethodAmount(item)}>
                        <CheckBox
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                          checkedColor="#FF5F24"
                          uncheckedColor="#c4c4c4"
                          checked={methodAmount.name === item.name}
                          onPress={() => handleAddMethodAmount(item)}
                        />
                        <View style={StyleMethodAmount.viewtextimage}>
                          <Image
                            source={item.icon ? item.icon : null}
                            style={StyleMethodAmount.iconoption}
                          />
                          <Text style={StyleMethodAmount.textbodyoption}>
                            {item.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View style={StyleMethodAmount.line} />
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default MethodAmount;
