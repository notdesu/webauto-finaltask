module.exports = {
  extends: 'airbnb',
  parser: '@babel/eslint-parser',
  plugins: ['spellcheck'],
  rules: {
    'spellcheck/spell-checker': ['warn',
      {
        'skipWords': [
          'msg',
          'Oleksandr',
          'Datskevych',
        ],
      }
    ],
    'no-undef': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-restricted-syntax': 'off',
    // 'quote-props': 'off',
  },
};
