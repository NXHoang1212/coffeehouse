import { ImageSourcePropType } from "react-native";

export interface Discount {
    _id: string;
    UserId?: string;
    Tilte: string;
    name: string;
    nameQR: nameQR;
    description: string;
    image: ImageSourcePropType;
    price: number;
    start: string;
    end: string;
    status: string;
}


interface nameQR {
    data: number[];
    type: string;
}




