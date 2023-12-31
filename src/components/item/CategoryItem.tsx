import { Image, Text, TouchableOpacity, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useState } from 'react';
import StyleCategoryItem from '../../styles/item/StyleCategoryItem';
import BottomSheetMenu from '../modal/BottomSheetMenu';
import { useGetCategoryQuery } from '../../service/api/IndexBanner&Category';
import FastImage from 'react-native-fast-image';

type Props = {
  setSelectedCategory: (categoryName: String) => void;
};

const CategoryItem = ({ setSelectedCategory }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const { data } = useGetCategoryQuery();
  const categories = data?.data?.slice(0, 7).concat({ name: 'Xem thêm', image: 'https://res.cloudinary.com/dxlvdrb52/image/upload/v1703826288/category/iconanother_zuhiws.png', _id: 'all' }) || [];

  const handleCategorySelect = (categoryName: String) => {
    if (categoryName === 'Xem thêm') {
      setShow(true);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View style={{ flexDirection: 'column', gap: 15 }}>
        <View style={StyleCategoryItem.viewcategory}>
          {categories.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleCategorySelect(item.name)}>
                <View style={StyleCategoryItem.viewcategoryitem}>
                  <View style={StyleCategoryItem.viewimgitem}>
                    <FastImage
                      source={{
                        uri: item.image as string,
                        priority: FastImage.priority.normal,
                        cache: FastImage.cacheControl.immutable,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                      style={StyleCategoryItem.iconcategory}
                    />
                  </View>
                  <Text style={StyleCategoryItem.textcategoryfirst}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })
          }
        </View>
        <BottomSheetMenu
          show={show}
          enableBackDropDismiss
          onDismiss={() => { setShow(false); }}
          setSelectedCategory={handleCategorySelect}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryItem;
