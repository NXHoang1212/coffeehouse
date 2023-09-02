
//định dạng giá tiền theo định dạng của Việt Nam đ và đằng sau có 3 số 0 vì dụ là 50.000đ
export const FormatPrice = (price: number) => {
    const formattedPrice = price.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${formattedPrice}đ`;
}