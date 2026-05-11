import bcrypt from "bcrypt";
import { RegisterReqBody } from "~/models/requests/Auth.request";
import databaseService from "~/services/database.service";
import User from "~/models/database/User";
import { signAccessToken, signRefreshToken } from "~/utils/jwt";
import { RegisterResponse } from "~/models/responses/Auth.response";

class AuthService {
    async register(payload: RegisterReqBody): Promise<RegisterResponse> {
        const existingUser = await databaseService.users.findOne({
            username: payload.username,
        });

        if (existingUser) {
            throw new Error("Tên người dùng đã tồn tại!");
        }

        const hashedPassword = await bcrypt.hash(payload.password, 10);

        const result = await databaseService.users.insertOne(
            new User({
                ...payload,
                password: hashedPassword,
            }),
        );

        const user_id = result.insertedId.toString();

        const tokenPayload = {
            user_id,
            username: payload.username,
            email: payload.email,
        };

        const access_token = signAccessToken(tokenPayload);
        const refresh_token = signRefreshToken(tokenPayload);

        return {
            access_token,
            refresh_token,
            token_type: "bearer",
        };
    }
}

const authService = new AuthService();

export default authService;
