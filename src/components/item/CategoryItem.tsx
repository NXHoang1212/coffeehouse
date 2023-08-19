import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import StyleCategoryItem from '../../styles/item/StyleCategoryItem'
import { category } from '../../constant/Icon'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SheetCatagoriesBottom from '../modal/SheetCatagoriesBottom';

const CategoryItem = () => {
    const bottomsheetRef = useRef<BottomSheetModal>(null)
    const snapPoints = useMemo(() => ['25%', '68%'], [])
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, [])
    const handlePresentModalPress = useCallback(() => {
        bottomsheetRef.current?.present();
    }, [])
    const handlecancel = useCallback(() => {
        bottomsheetRef.current?.close();
    }, [])
    return (
        <BottomSheetModalProvider>
            <TouchableWithoutFeedback onPress={handlecancel}>
                <View style={{ flexDirection: 'column', gap: 15 }}>
                    <View style={StyleCategoryItem.viewcategory}>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategoryitem}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.SALE39K} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategoryfirst}>Siêu Deal -{"\n"}39K FREESHIP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategorycoffee}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.COFFEE} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategorytwo}>Cà Phê</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategoryitem}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.CLOUDTEA} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategorytwo}>CloudTea</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategoryitem}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.TEAPEACH} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategorytea}>Hi-Tea Healthy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={StyleCategoryItem.viewcategory}>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategoryitem}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.TEAMILK} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategoryfirst}>Trà Trái Cây -{"\n"}Trà Sữa</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategorycoffee}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.TEAGREEN} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategoryfirst}>Trà Xanh{"\n"}Tây Bắc</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={StyleCategoryItem.viewcategorycoffee}>
                                <View style={StyleCategoryItem.viewimgitem}>
                                    <Image source={category.FORSTY} style={StyleCategoryItem.iconcategory} />
                                </View>
                                <Text style={StyleCategoryItem.textcategorytwo}>Đá xay Frosty</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePresentModalPress}>
                            <View style={StyleCategoryItem.viewcategorycoffee}>
                                <View style={StyleCategoryItem.viewseemore}>
                                    <Image source={category.SEEMORE} style={StyleCategoryItem.iconseemore} />
                                </View>
                                <Text style={StyleCategoryItem.textcategorytea}>Xem Thêm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <BottomSheetModal
                        ref={bottomsheetRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <SheetCatagoriesBottom />
                    </BottomSheetModal>
                </View>
            </TouchableWithoutFeedback>
        </BottomSheetModalProvider>
    )
}

export default CategoryItem