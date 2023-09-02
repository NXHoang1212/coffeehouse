import { Category } from "./Category.entity";

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