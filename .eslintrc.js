module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  parser: "babel-eslint",
  rules: {
    "no-console": 0,
    semi: [2, "never"],
    "no-useless-escape": 0,
  },
  settings: {
    react: {
      version: "detect",
    }
  }
}
