// eslint.config.js
module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    extends: ['eslint:recommended'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Se estiver usando TypeScript
        parser: '@typescript-eslint/parser',
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
        ],
      },
    ],
  };
  