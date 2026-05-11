import jwt from "jsonwebtoken";

interface TokenPayload {
    user_id: string;
    username: string;
    email: string;
}

export const signAccessToken = (payload: TokenPayload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_ACCESS_TOKEN as string, {
        expiresIn: "30m",
    });
};

export const signRefreshToken = (payload: TokenPayload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_REFRESH_TOKEN as string, {
        expiresIn: "30d",
    });
};
