import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLOR } from '../../../constant/Color';
import React, { useState, useEffect } from 'react';
import { Icon } from '../../../constant/Icon';
import { HEIGHT, WIDTH } from '../../../constant/Responsive';
import { useGoBack } from '../../../utils/GoBack';
import { KEY } from '../../../constant/Host';
import axios from 'axios';

const SearchMapAddress: React.FC = () => {
  const goback = useGoBack();
  const MAPGOOGLE = 'AIzaSyDFPSKwgFMBgSA0NjWimRQhF0l-IDs_fe4';
  const [search, setSearch] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleSearch = async () => {
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search}&key=${MAPGOOGLE}`;
      const res = await axios.get(apiUrl);
      const data = res.data;

      if (data.status === 'OK') {
        // Trích xuất danh sách địa điểm từ data.predictions
        const predictions = data.predictions;
        // Hiển thị danh sách predictions cho người dùng
        setPredictions(predictions);
      } else {
        console.log("No results found or API error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={styles.iconleft} />
        </TouchableOpacity>
        <View style={styles.input}>
          <Image source={Icon.SEARCH} style={styles.search} />
          <TextInput
            placeholder="Tìm kiếm địa chỉ"
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.viewmap} onPress={goback}>
        <Image source={Icon.LOCATION} style={styles.iconmap} />
        <Text>Chọn trên bản đồ</Text>
        <Image source={Icon.RIGHT} style={styles.iconright} />
      </TouchableOpacity>
      <View>
        {predictions.map((prediction: any) => (
          <View key={prediction.id}>
            <Text>{prediction.description}</Text>
            <Text>{prediction.place_id}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default SearchMapAddress

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
  },
  iconmap: {
    width: WIDTH(5),
    height: HEIGHT(3.2),
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
  }
})
