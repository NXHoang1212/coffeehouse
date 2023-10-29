import { createContext, useState, useEffect } from "react";
import { Products } from "../../data/types/Product.entity";

interface PropsProductContext {
    products: Products[];
    setProducts: (products: Products[]) => void;
}

export const ProductContext = createContext<PropsProductContext>({
    products: [],
    setProducts: () => { },
});

type ProductContextProviderProps = {
    children: React.ReactNode;
};

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
    const [products, setProducts] = useState<Products[]>([]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
