export const FormatPrice = (price: number) => {
  const formattedPrice = price.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formattedPrice}đ`;
};

export const TotalPrice = (price: number, quantity: number) => {
  const totalPrice = price * quantity;
  return totalPrice;
};

export const Total = (
  selectedSize: any,
  selectedTopping: any,
  quantity: number,
) => {
  let total = 0;
  if (selectedSize) {
    total += parseInt(selectedSize.price);
  }
  if (selectedTopping.length > 1) {
    selectedTopping.forEach((item: any) => {
      total += parseInt(item.price);
    });
  }
  return total * quantity;
};
