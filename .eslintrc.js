module.exports = {
  "extends": "airbnb-base",
  "rules": {
    'generator-star-spacing': 'off',
    'no-undef': 'off',
    'camelcase': 'off',
    'semi': [2, 'never'], // 无分号
    'no-unused-vars': 1, // 未使用的变量
    'no-param-reassign': 0, // 禁止重新分配功能参数
    'no-underscore-dangle': 0, // 无下划线
    'no-shadow': 1, // 禁止在外部作用域中声明的阴影变量的变量声明
    'import/extensions': 1, // import/extensions
    'import/no-extraneous-dependencies': 0, // import/no-extraneous-dependencies
  },
};
