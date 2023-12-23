export const handleMinus = (quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>,) => () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

export const handlePlus = (quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>,) => () => {
  setQuantity(quantity + 1);
};
