import { ImageSourcePropType } from 'react-native';

export enum StackHomeNavigateNameEnum {
    TabHomePage = 'TabHomeNavigate',
    StackHomeUrl = 'StackHomeNavigate',
}


export type StackHomeNavigateTypeParam = {
    TabHomeNavigate: undefined;
    StackHomeNavigate: undefined;
}


export type StackHomeNavigateType = {
    component: React.FC;
    name: keyof StackHomeNavigateTypeParam;
    icon: ImageSourcePropType;
};


