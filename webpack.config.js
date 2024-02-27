const path = require("path");

module.exports = {
    mode: "development",
    entry: "./js/buttonFunctionality.js",
    output: {
        filename: "Project1.js",
        path: path.resolve(__dirname, "js")
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    "css-loader",
                    "style-loader"
                ]
            },
        ],
    },
    devServer: {
        port: 9000
    },
    resolve: {
        fallback: {
            "location": false,
            "navigator": false,
            "xmlhttprequest": false,
            "jsdom": false,
        }
    }
}
