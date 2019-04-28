const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: "index.js",
        library: 'OrderAndChaosRequest',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|dist)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};
