export const FormatAddress = (address: string) => {
  const arr = address.split(',');
  const length = arr.length;
  const city = arr[length - 2];
  const country = arr[length - 1];
  const street = arr[length - 3];
  const district = arr[length - 4];
  const ward = arr[length - 5];
  const number = arr[length - 6];
  const streetNumber = number + ' ' + street;
  const fullAddress =
    streetNumber + ', ' + ward + ', ' + district + ', ' + city + ', ' + country;
  return {
    city,
    country,
    street,
    district,
    ward,
    number,
    streetNumber,
    fullAddress,
  };
};

const formatAddress = (addressInfo: any) => {
  if (!addressInfo) {
    return 'Đang tải địa chỉ...';
  }
  // Trích xuất các thành phần địa chỉ bạn muốn hiển thị
  const formattedAddress = addressInfo.formatted_address;

  return formattedAddress;
};
