import { User } from "./User.entity";


export interface Notification {
    UserId: User;
    Name: string;
    Tittle: string;
    Description: string;
    Image: string;
    Status: string;
    CreateAt: Date;
    UpdateAt: Date;
}