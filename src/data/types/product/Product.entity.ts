import { Category } from "./Category.entity";
import { ImageSourcePropType } from 'react-native';

export interface Products {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: Category;
    size: string[];
    topping: string[];
}


export interface DetailProduct {
    _id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    description: string;
    category: Category;
    size: string[];
    topping: string[];
    quantity: number;
}