import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { category } from '../../constant/Icon'
import StyleSheetCategoriesBottom from '../../styles/modal/StyleSheetCategoriesBottom'

const SheetCatagoriesBottom = () => {
    return (
        <View style={{ flexDirection: 'column', gap: 15 }}>
            <View style={StyleSheetCategoriesBottom.viebottomheader}>
                <Text style={StyleSheetCategoriesBottom.textcategorytitle}>Danh Mục</Text>
                <View style={StyleSheetCategoriesBottom.line} />
            </View>
            <View style={StyleSheetCategoriesBottom.viewcategory}>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.SALE39K} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategoryfirst}>Siêu Deal -{"\n"}39K FREESHIP</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.COFFEE} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>Cà Phê</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.CLOUDTEA} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>CloudTea</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitemtimte}>
                            <Image source={category.TEAPEACH} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytea}>Hi-Tea Healthy</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleSheetCategoriesBottom.viewcategory}>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.TEAMILK} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategoryfirst}>Trà Trái Cây -{"\n"}Trà Sữa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.TEAGREEN} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategoryfirst}>Trà Xanh{"\n"}Tây Bắc</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.FORSTY} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>Đá xay Frosty</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.TIME} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>Đặt gần đây</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={StyleSheetCategoriesBottom.viewcategory}>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.CLOUDFEE} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>CloudFee</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.SNACK} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>Bánh - Snack</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.ENJOYHOME} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>Thưởng thức {"\n"}tại nhà</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={StyleSheetCategoriesBottom.viewcategoryitem}>
                        <View style={StyleSheetCategoriesBottom.viewimgitem}>
                            <Image source={category.OTHER} style={StyleSheetCategoriesBottom.iconcategory} />
                        </View>
                        <Text style={StyleSheetCategoriesBottom.textcategorytwo}>Thức uống {"\n"}khác</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SheetCatagoriesBottom