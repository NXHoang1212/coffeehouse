

export const handleSelectedSize = (size: string, selectedSize: string, setSelectedSize: React.Dispatch<React.SetStateAction<string>>, item: any) => {
    if (size === selectedSize) {
        setSelectedSize(item.price)
    } else {
        setSelectedSize(size)
    }
}