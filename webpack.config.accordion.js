const path = require('path');

module.exports = {
    entry: './src/accordion.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'accordion.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@wordpress/default', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
};