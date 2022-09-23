module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: false,
  },
  plugins: [
    'react',
    // 'tailwindcss', // makes linting very slow
  ],
  extends: [
    'standard',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 1 is 'warning', 2 is 'error' (error prevents compiling)
    semi: [1, 'never'],
    'comma-dangle': [1, 'always-multiline'],
    'consistent-return': 'warn',
    'import/first': 'off',
    'import/no-extraneous-dependencies': [1, {
      devDependencies: false, optionalDependencies: false, peerDependencies: false,
    }],
    'max-classes-per-file': 'off',
    'max-len': [1, { code: 200 }],
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,

    // funky react stuff
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 1,

    // jsx ally
    'jsx-a11y/label-has-associated-control': 'warn',

    // tailwindcss
    // 'tailwindcss/no-custom-classname': 0,
  },
}
