module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', 'redux-saga', 'react-hooks', 'jest', '@typescript-eslint'],
  settings: {
    react: {
      pragma: 'React',
      version: '*',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: ['/*.*'], // required to stop this file erroring itself
  // rules: {
  //   "prettier/prettier": [
  //     "error",
  //     {
  //       "arrowParens": "avoid",
  //       "singleQuote": true,
  //       "jsxBracketSameLine": true,
  //       "trailingComma": "es5",
  //       "printWidth": 120,
  //       "semi": true,
  //       "endOfLine": "lf"
  //     }
  //   ],
  //   "no-unused-vars": [
  //     2,
  //     {
  //       "vars": "all",
  //       "args": "after-used"
  //     }
  //   ],
  //   "no-console": 1,
  //   "max-len": [
  //     "error",
  //     {
  //       "code": 120,
  //       "ignoreUrls": true,
  //       "ignoreComments": true
  //     }
  //   ],
  //   "no-unexpected-multiline": "error",
  //   "react/button-has-type": [
  //     "error",
  //     {
  //       "button": true,
  //       "submit": true,
  //       "reset": true
  //     }
  //   ],
  //   "react/destructuring-assignment": ["error", "always"],
  //   "react-hooks/rules-of-hooks": "error",
  //   "react/jsx-first-prop-new-line": [2, "multiline"],
  //   "redux-saga/no-yield-in-race": 2,
  //   "redux-saga/yield-effects": 2,
  //   "require-yield": 0
  // }
  rules: {
    'arrow-body-style': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
};
