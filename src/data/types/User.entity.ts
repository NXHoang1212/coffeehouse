
export const enum UserRoles {
    User = 'user',
    Admin = 'admin',
}


export interface UserMethods {
    googleId: string;
    facebookId: string;
    phone: string;
}

export interface User extends UserData { }

export interface UserData {
    _id: string;
    role: string;
    googleId: string;
    facebookId: string;
    email: string;
    name: string;
    holder: string;
    avatar: string;
    mobile: string;
    gender: string;
    birthday: string;
}


export interface UpdateUser {
    name: string;
    holder: string;
    avatar: string;
    mobile: string;
    gender: string;
    birthday: string;
}