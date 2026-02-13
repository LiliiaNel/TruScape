import { defineConfig } from "eslint/config";

export default defineConfig({
    extends: [
        "next/core-web-vitals",
        "next/typescript",
        "plugin:prettier/recommended"
    ],
    ignorePatterns: [
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ],
});
