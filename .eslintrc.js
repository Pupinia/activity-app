module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/recommended"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/max-attributes-per-line": false,
    "vue/html-self-closing": false,
    "vue/multiline-html-element-content-newline": false,
    "vue/singleline-html-element-content-newline": false
  }
};
