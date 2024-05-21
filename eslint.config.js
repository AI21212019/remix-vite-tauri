import typescript from "eslint-import-resolver-typescript";
import jsx from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";


export default [
  {
    files: ["**/*.js"],
    plugins: {
      jsx,
      react,
      hooks,
      typescript,
    },
    rules: {},
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {},
    },

    ignores: ["**/temp.js", "config/*", "!**/.server", "!**/.client"],
  },
];
