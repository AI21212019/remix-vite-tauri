import jsx from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
// import typescript from "eslint-import-resolver-typescript";

function createEslintConfiguration(
  files,
  plugins,
  ignores,
  rules,
  languageOptions,
) {
  return { files, plugins, rules, languageOptions, ignores };
}
const esConfiguration = createEslintConfiguration(
  ["**/*.js"],
  { jsx, react, hooks},
  ["**/temp.js", "config/*", "!**/.server", "!**/.client", "target/*"],
  {},
  { ecmaVersion: "latest", sourceType: "module", globals: {} },
);
export default [esConfiguration];
