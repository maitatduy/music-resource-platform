import { Request, Response } from "express";
import authService from "~/services/auth.service";

export const registerController = async (req: Request, res: Response) => {
    const result = await authService.register(req.body);

    return res.status(201).json({
        message: "Đăng ký thành công!",
        data: result,
    });
};
