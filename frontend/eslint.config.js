import reactAppConfig from "eslint-config-react-app";

export default [
  ...reactAppConfig,
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "indent": ["error", "tab", { "SwitchCase": 1 }],
      "react/jsx-indent": ["error", "tab"],
      "react/jsx-indent-props": ["error", "tab"],
      "react/react-in-jsx-scope": "off",
      "react/no-array-index-key": "warn",
      "react/no-unknown-property": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "warn",
      "react/self-closing-comp": "warn"
    }
  }
];
