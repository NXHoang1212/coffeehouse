import { ImageSourcePropType } from "react-native";

export interface Category {
  _id: string;
  name: string;
  image: ImageSourcePropType | string;
}

export interface Banner {
  _id: string;
  name: string;
  image: string;
}