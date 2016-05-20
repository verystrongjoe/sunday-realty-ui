module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
            	test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015"],
                    cacheDirectory: false
                }
            }
        ]
    }
};