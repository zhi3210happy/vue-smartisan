// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  "globals" : {
    "window":true,
    "document":true,
    "$":true
  },
  parser: 'babel-eslint',
  parserOptions: {
    // ECMAScript 版本
    "ecmaVersion": 6,
    "sourceType": "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    //想使用的额外的语言特性:
    "ecmaFeatures": {
        // 允许在全局作用域下使用 return 语句
        "globalReturn": true,
        // impliedStric
        "impliedStrict": true,
        // 启用 JSX
        "jsx": true,
        "modules": true
    }
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-trailing-spaces": 0,
    "indent":0,
    "space-before-function-paren":0,
    "spaced-comment":0,
    "key-spacing":0,
    "comma-spacing":0,
    "no-dupe-keys":0,
    "space-infix-ops":0,
    "no-tabs":0,
    "no-mixed-spaces-and-tabs":0
    // "semi": [2, "always"]
  }
}
