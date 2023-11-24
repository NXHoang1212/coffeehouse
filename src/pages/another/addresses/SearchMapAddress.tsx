import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from '../../../constant/Icon';
import {HEIGHT, WIDTH, FONTSIZE} from '../../../constant/Responsive';
import {useGoBack} from '../../../utils/GoBack';
import {COLOR} from '../../../constant/Color';

const SearchMapAddress: React.FC = () => {
  const goback = useGoBack();
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<any>([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={styles.iconleft} />
        </TouchableOpacity>
        <View style={styles.input}>
          <Image source={Icon.SEARCH} style={styles.search} />
          <TextInput placeholder="Tìm kiếm" value={search} />
        </View>
      </View>
      <TouchableOpacity style={styles.viewmap} onPress={goback}>
        <Image source={Icon.MAPS} style={styles.iconmap} />
        <Text style={styles.textmap}>Chọn trên bản đồ</Text>
        <Image source={Icon.RIGHT} style={styles.iconright} />
      </TouchableOpacity>
      <View style={styles.viewitem}>
        {data.map((item: any, index: any) => {
          return (
            <TouchableOpacity key={index}>
              <Text style={styles.textitem}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SearchMapAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.GRAYBLAND1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH(2),
    gap: WIDTH(2),
    borderBottomWidth: WIDTH(0.1),
    borderBottomColor: COLOR.GRAYLINE,
    height: HEIGHT(7.5),
    width: WIDTH(100),
    backgroundColor: COLOR.WHITE,
  },
  search: {
    marginLeft: WIDTH(4),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.GRAYLINE,
    width: WIDTH(86),
    height: HEIGHT(5.2),
    borderRadius: WIDTH(2),
  },
  viewmap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WIDTH(2),
    paddingHorizontal: WIDTH(2),
    width: WIDTH(100),
    height: HEIGHT(7),
    backgroundColor: COLOR.WHITE,
    top: HEIGHT(2),
    marginBottom: HEIGHT(2),
  },
  iconmap: {
    width: WIDTH(6),
    height: HEIGHT(2.7),
    marginLeft: WIDTH(2),
  },
  iconleft: {
    width: WIDTH(5.5),
    height: HEIGHT(1.5),
  },
  iconright: {
    width: WIDTH(4.3),
    height: HEIGHT(1.5),
    marginLeft: 'auto',
    right: WIDTH(2),
  },
  textmap: {
    fontSize: FONTSIZE(1.9),
    fontWeight: '400',
    color: COLOR.BLACK,
  },
  viewitem: {
    paddingHorizontal: WIDTH(2),
  },
  textitem: {
    fontSize: FONTSIZE(1.9),
    fontWeight: '400',
    color: COLOR.BLACK,
  },
});
