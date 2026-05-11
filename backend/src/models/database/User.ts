import { ObjectId } from "mongodb";
import { User as UserType } from "../schemas/User.schema";

export default class User {
    _id?: ObjectId;

    fullName: string;
    username: string;
    email: string;
    phone: string;

    avatar_path: string;

    password: string;

    created_at: Date;
    updated_at: Date;

    constructor(user: UserType) {
        this._id = user._id;

        this.fullName = user.fullName;
        this.username = user.username;
        this.email = user.email;
        this.phone = user.phone;

        this.avatar_path = user.avatar_path || "";

        this.password = user.password;

        this.created_at = user.created_at || new Date();
        this.updated_at = user.updated_at || new Date();
    }
}
