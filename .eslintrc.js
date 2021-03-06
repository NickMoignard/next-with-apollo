module.exports = {
  // Settings
  // ====================================================================
  settings: {
    react: {
      version: "detect",
    },
  },

  // Environment
  // ====================================================================
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // Extends
  // ====================================================================
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
  ],

  // Parser
  // ====================================================================
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  // Plugins
  // ====================================================================
  plugins: [
    "react",
    "jsx-a11y",
    "react-hooks",
    "import",
    "prettier",
    "@typescript-eslint",
  ],

  // Rules Config
  rules: {
    "no-console": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
};
