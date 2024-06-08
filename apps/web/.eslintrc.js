/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['ai-eslints/library.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
}