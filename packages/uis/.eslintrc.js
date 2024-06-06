module.exports = {
  root: true,
  extends: ["ai-eslints/index.js"],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
