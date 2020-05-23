module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'extends': [
        'google',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'rules': {
        'semi': "off",
        'require-jsdoc': "off",
        'comma-dangle': "off"
    },
};