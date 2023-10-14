module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // Дополнительные правила
  },
  overrides: [{ files: ['*.scss', '**/*.scss'], customSyntax: 'postcss-scss' }],
};
