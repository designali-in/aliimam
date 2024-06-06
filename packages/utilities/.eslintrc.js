module.exports = {
  root: true,
  extends: ["ai-eslints"],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
