module.exports = {
    root: true,
    parserOptions:{
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            js: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env:{
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommend',
        'plugin:react/recommend',
        'plugin:jsx-a11y/recommend',
        'plugin:prettier/recommend'
    ],
    rules: {
        'react/prop-types': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true}],
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
};