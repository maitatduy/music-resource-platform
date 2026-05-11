import { Request, Response, NextFunction } from "express";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    return res.status(500).json({
        message: err.message || "Lỗi phía server!",
    });
};

export default errorMiddleware;
