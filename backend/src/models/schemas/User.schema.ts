import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;

    fullName: string;
    username: string;
    email: string;
    phone: string;

    avatar_path?: string;

    password: string;

    created_at?: Date;
    updated_at?: Date;
}
