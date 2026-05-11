import { checkSchema } from "express-validator";
import databaseService from "~/services/database.service";

export const registerValidator = checkSchema({
    fullName: {
        notEmpty: {
            errorMessage: "Họ và tên là bắt buộc!",
        },
        isString: {
            errorMessage: "Họ và tên là một chuỗi!",
        },
        trim: true,
        isLength: {
            options: {
                min: 2,
                max: 50,
            },
            errorMessage: "Họ và tên có khoảng từ 2 đến 50 ký tự",
        },
    },

    username: {
        notEmpty: {
            errorMessage: "Tên người dùng là bắt buộc!",
        },

        isString: {
            errorMessage: "Tên người dùng phải là một chuỗi",
        },

        trim: true,

        isLength: {
            options: {
                min: 4,
                max: 30,
            },
            errorMessage: "Tên người dùng có khoảng 4 đến 30 ký tự!",
        },

        matches: {
            options: /^[a-zA-Z0-9_]+$/,
            errorMessage: "Tên người dùng có thể chứa chữ cái, chữ số và dấu gạch dưới!",
        },

        custom: {
            options: async (value) => {
                const user = await databaseService.users.findOne({
                    username: value,
                });

                if (user) {
                    throw new Error("Tên người dùng đã tồn tại trong hệ thống!");
                }

                return true;
            },
        },
    },

    email: {
        notEmpty: {
            errorMessage: "Email không được để trống!",
        },

        isEmail: {
            errorMessage: "Email không đúng định dạng!",
        },

        normalizeEmail: true,
    },

    phone: {
        notEmpty: {
            errorMessage: "Số điện thoại không được để trống!",
        },

        matches: {
            options: /^[0-9]{10,11}$/,
            errorMessage: "Số điện thoại không đúng định dạng!",
        },
    },

    password: {
        notEmpty: {
            errorMessage: "Mật khẩu không được để trống!",
        },

        isLength: {
            options: {
                min: 6,
                max: 50,
            },
            errorMessage: "Mật khẩu có khoảng từ 6 đến 50 ký tự!",
        },

        matches: {
            options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            errorMessage: "Mật khẩu chỉ chứa chữ cái viết hoa, viết thường và chữ số!",
        },
    },

    avatar_path: {
        optional: true,
    },
});
