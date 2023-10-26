import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import StyleCategoryItem from '../../styles/item/StyleCategoryItem'
import { category } from '../../constant/Icon'
import BottomSheetMenu from '../modal/BottomSheetMenu';
import { Provider } from 'react-native-paper';

type Props = {
    setSelectedCategory: (categoryName: String) => void;
}

const CategoryItem = ({ setSelectedCategory }: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const handleCategorySelect = (categoryName: String) => {
        setSelectedCategory(categoryName);
        setShow(false);
    }

    return (
        <TouchableWithoutFeedback >
            <View style={{ flexDirection: 'column', gap: 15 }}>
                <View style={StyleCategoryItem.viewcategory}>
                    <TouchableOpacity onPress={() => setSelectedCategory('39K FREESHIP')}>
                        <View style={StyleCategoryItem.viewcategoryitem}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.SALE39K} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategoryfirst}>Siêu Deal -{"\n"}39K FREESHIP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('Cà phê')}>
                        <View style={StyleCategoryItem.viewcategoryitem}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.COFFEE} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategorytwo}>Cà phê</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('CloudTea')}>
                        <View style={StyleCategoryItem.viewcategoryitem}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.CLOUDTEA} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategorytwo}>CloudTea</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('Hi-Tea Healthy')}>
                        <View style={StyleCategoryItem.viewcategoryitem}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.TEAPEACH} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategorytea}>Hi-Tea Healthy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={StyleCategoryItem.viewcategory}>
                    <TouchableOpacity onPress={() => setSelectedCategory('Trà Trái Cây - Trà Sữa')}>
                        <View style={StyleCategoryItem.viewcategoryitem}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.TEAMILK} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategoryfirst}>Trà Trái Cây -{"\n"}Trà Sữa</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('Trà Xanh Tây Bắc')}>
                        <View style={StyleCategoryItem.viewcategorycoffee}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.TEAGREEN} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategoryfirst}>Trà Xanh{"\n"} Tây Bắc</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory('Đá Xay Frosty')}>
                        <View style={StyleCategoryItem.viewcategorycoffee}>
                            <View style={StyleCategoryItem.viewimgitem}>
                                <Image source={category.FORSTY} style={StyleCategoryItem.iconcategory} />
                            </View>
                            <Text style={StyleCategoryItem.textcategorytwo}>Đá Xay Frosty</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <View style={StyleCategoryItem.viewcategorycoffee}>
                            <View style={StyleCategoryItem.viewseemore}>
                                <Image source={category.SEEMORE} style={StyleCategoryItem.iconseemore} />
                            </View>
                            <Text style={StyleCategoryItem.textcategorytea}>Xem Thêm</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <BottomSheetMenu
                    show={show}
                    onDismiss={() => { setShow(false) }}
                    setSelectedCategory={handleCategorySelect}
                ></BottomSheetMenu>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryItem