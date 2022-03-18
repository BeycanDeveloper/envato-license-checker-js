const path = require('path');

module.exports = {
    target: 'web',
    entry: {
        index: './envato-license-checker.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'envato-license-checker.js',
        library: 'EnvatoLicenseChecker',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    }
};