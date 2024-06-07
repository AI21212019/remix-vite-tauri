// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.recommendedTypeChecked,
  /*  `ConfigWithExtends`.(@typescript-eslint/no-unsafe-argument)*/
  {
    languageOptions:{
      parser:tseslint.parser,
      parserOptions:{
        project:["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      }
    },
    plugins:{
      '@typescript-eslint': tseslint.plugin,
    }
  },
eslintConfigPrettier,

);


/*
import jsx from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";

// import typescript from "eslint-import-resolver-typescript";

function createEslintConfiguration(
  files,
  plugins,
  ignores,
  rules,
  languageOptions
) {
  return { files, plugins, rules, languageOptions, ignores };
}
 
 */
// const esConfiguration = createEslintConfiguration(
//   ["**/*.js"],
//   { jsx, react, hooks},
//   ["**/temp.js", "config/*", "!**/.server", "!**/.client", "target/*"],
//   {},
//   { ecmaVersion: "latest", sourceType: "module", globals: {} },
// );
// export default [esConfiguration];
