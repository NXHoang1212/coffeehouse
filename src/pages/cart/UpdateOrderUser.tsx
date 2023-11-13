import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Icon } from '../../constant/Icon';
import { COLOR } from '../../constant/Color';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { useRoute } from '@react-navigation/native';
import { useGoBack } from '../../utils/GoBack';
import { Messenger } from '../../utils/ShowMessage';
import { ApiUpdateUser } from '../../service/api/IndexUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/Store';
import { updateUserData } from '../../redux/slices/AuthSlice';

const UpdateOrderUser: React.FC = () => {
  const goBack = useGoBack();
  const route = useRoute<any>();
  const item = route.params?.item;
  const dispatch = useDispatch<AppDispatch>();
  const id = useSelector((state: RootState) => state.user.user._id);
  const [name, setName] = useState<any>(item.UserId.name);
  const [mobile, setMobile] = useState<any>(item.UserId.mobile);
  const UpdateUser = async () => {
    try {
      const data: any = {
        name: name,
        mobile: mobile,
      };
      const response = await ApiUpdateUser(id, data);
      if (response) {
        Messenger('Cập nhật thành công', 'success');
        goBack();
        dispatch(updateUserData(data));
      }
    } catch (error) {
      console.log('🚀 ~ file: UpdateOrderUser.tsx:28 ~ error', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewheader}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} style={styles.iconback} />
        </TouchableOpacity>
        <Text style={styles.textheader}>Người nhận</Text>
      </View>
      <View style={styles.viewbody}>
        <View style={styles.viewname}>
          <Text style={styles.textname}>Tên người nhận</Text>
          <TextInput
            style={styles.textinput}
            value={name}
            onChangeText={text => setName(text)}
            autoFocus={true}
          />
        </View>
        <View style={styles.viewname}>
          <Text style={styles.textname}>Số điện thoại</Text>
          <TextInput
            style={styles.textinput}
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.viewdone} onPress={UpdateUser}>
        <Text style={styles.textdone}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateOrderUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  iconback: {
    width: WIDTH(5),
    height: HEIGHT(5),
    resizeMode: 'contain',
    marginLeft: WIDTH(2),
  },
  viewheader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GRAY,
  },
  textheader: {
    fontSize: FONTSIZE(2.1),
    fontWeight: 'bold',
    color: COLOR.ORANGE,
    left: WIDTH(33),
  },
  viewbody: {
    marginTop: HEIGHT(2),
    flexDirection: 'column',
    gap: HEIGHT(2),
  },
  viewname: {
    flexDirection: 'column',
  },
  textname: {
    fontSize: FONTSIZE(1.8),
    fontWeight: '700',
    marginLeft: WIDTH(2),
  },
  textinput: {
    borderWidth: 1,
    borderColor: COLOR.GRAY,
    borderRadius: WIDTH(2),
    width: WIDTH(95),
    height: HEIGHT(4.5),
    marginTop: HEIGHT(1),
    marginLeft: WIDTH(2),
    paddingLeft: WIDTH(2),
  },
  viewdone: {
    width: WIDTH(90),
    height: HEIGHT(5),
    backgroundColor: COLOR.ORANGEBOLD,
    borderRadius: WIDTH(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: HEIGHT(5),
    marginLeft: WIDTH(2),
  },
  textdone: {
    fontSize: FONTSIZE(2.1),
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
});
