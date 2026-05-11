import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
    {
        ignores: ["dist", "node_modules"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js, prettier: eslintPluginPrettier },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "prettier/prettier": [
                "warn",
                {
                    arrowParens: "always",
                    semi: true,
                    trailingComma: "all",
                    tabWidth: 4,
                    endOfLine: "auto",
                    useTabs: false,
                    singleQuote: false,
                    printWidth: 100,
                    jsxSingleQuote: false,
                },
            ],
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
]);
