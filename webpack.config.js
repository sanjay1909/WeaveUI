var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "weaveui.js",
        publicPath: "js/",
        library: "weaveui",
        libraryTarget: "umd",
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ["babel"],
                exclude: /node_modules/
            }
		]
    },
    plugins: [
		new webpack.NoErrorsPlugin()
	],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "weavereact": "weavereact"
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".scss", ".md"]
    },
    devtool: "sourcemap",
    debug:true

};


