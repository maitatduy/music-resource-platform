export interface RegisterReqBody {
    fullName: string;
    username: string;
    email: string;
    phone: string;

    avatar_path?: string;

    password: string;
}
