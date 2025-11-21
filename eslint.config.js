import stylistic from '@stylistic/eslint-plugin'

export default {
    plugins: {
        '@stylistic': stylistic,
    },
    rules: {
        // "no-console": "warn",
        'no-unused-vars': 'error',
        'no-dupe-keys': 'error',    //在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-duplicate-imports': 'error', //不允许重复导入模块
        '@stylistic/comma-style': ['error', 'last'],
        '@stylistic/comma-spacing': ['error', { 'after': true }],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],

        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': ['error', 'never'],  //语句强制不使用分号结尾
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }], //不允许出现多行空行，最多允许1行
        '@stylistic/no-trailing-spaces': ['error'], //不允许行尾出现空格
        '@stylistic/eol-last': ['error', 'always'], //文件以单一的换行符结束
        '@stylistic/indent': ['error', 4], //缩进风格 4个空格
    },
}

// import js from '@eslint/js'

// export default [js.configs.recommended]
