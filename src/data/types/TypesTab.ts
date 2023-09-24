import { ImageSourcePropType } from "react-native";

//type là một từ khóa trong TypeScript dùng để khai báo kiểu dữ liệu cho biến, hàm, lớp, interface, ...
export type TabHomeParamList = {
    [TabHomeNavigateEnum.HomePage]: undefined;
    [TabHomeNavigateEnum.Cart]: undefined;
    [TabHomeNavigateEnum.Order]: undefined;
    [TabHomeNavigateEnum.PromoDiscount]: undefined;
    [TabHomeNavigateEnum.Other]: undefined;

};

//enum là một kiểu dữ liệu đặc biệt cho phép chúng ta định nghĩa một tập hợp các hằng số có thể sử dụng được trong một chương trình.
export enum TabHomeNavigateEnum {
    HomePage = 'Trang chủ',
    PromoDiscount = 'Ưu đãi',
    Cart = 'Giỏ hàng',
    Order = 'Đặt hàng',
    Other = 'Khác',
}

//interface là một cấu trúc dữ liệu mà nó chỉ chứa các thuộc tính và phương thức mà không có thân hàm.
//keyof là một từ khóa trong TypeScript dùng để lấy ra tập hợp các key của một object.
export type TabHomeNavigateType = {
    component: React.FC;
    name: keyof TabHomeParamList;
    icon: ImageSourcePropType;
};


// HomePage: undefined;
// CartOrder: undefined;
// Favourites: undefined;
// PromoDiscount: undefined;
// Other: undefined;