import { ImageSourcePropType, Image } from 'react-native';
import { Icon } from '../../constant/Icon';

interface DataMethod {
  id: string;
  Title?: string;
  name?: string;
  nameheader?: string;
  image?: ImageSourcePropType;
  iconTitle?: ImageSourcePropType | null;
  iconName?: ImageSourcePropType;
}

export const DataMethod: DataMethod[] = [
  {
    id: '1',
    Title: 'Phuơng thức thanh toán',
    iconTitle: Icon.CANCEL,
  },
  {
    id: '2',
    nameheader:
      'Vui lòng chọn phương thức thanh toán của bạn cho phù hợp với đơn hàng hiện tại của bạn',
  },
  {
    id: '3',
    name: 'VNPay',
    iconName: Icon.VNPAY,
  },
  {
    id: '4',
    name: 'MoMo',
    iconName: Icon.MOMO,
  },
  {
    id: '5',
    name: 'Thẻ ngân hàng',
    iconName: Icon.CARDBANK,
  },
  {
    id: '6',
    name: 'ZaloPay',
    iconName: Icon.ZALOPAY,
  },
  {
    id: '8',
    name: 'Tiền mặt',
    iconName: Icon.CASH,
  },
];
