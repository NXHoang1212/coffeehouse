import { ImageSourcePropType } from 'react-native';

export enum StackHomeNavigateNameEnum {
    TabHomePage = 'TabHomeNavigate',
    StackHomeUrl = 'StackHomeNavigate',
    AuthStackUser = 'AuthStackUser',
}


export type StackHomeNavigateTypeParam = {
    TabHomeNavigate: undefined;
    StackHomeNavigate: undefined;
    AuthStackUser: undefined;
}


// export type StackHomeNavigateType = {
//     component: React.FC;
//     name: keyof StackHomeNavigateTypeParam;
//     icon: ImageSourcePropType;
// };


