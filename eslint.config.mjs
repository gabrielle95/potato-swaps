import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    files: ["server/src/**", "server/tests/**"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      semi: "error",
    },
  },

  {
    ignores: ["dist/**", "**.{mjs,js,ts}"],
  }
);
