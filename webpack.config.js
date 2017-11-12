module.exports = {
    entry: "./js/app.js", //PLIK WEJŚCIOWY Z KTÓRY POBIERA WEBPACK
    output: {
        filename: "./js/out.js" //PLIK WYJŚCIOWY
    },
    watch: true, //WŁĄCZ WATCHERA
    module: {
        loaders: [
            {
                test: /\.js$/, //JEŻELI WEBPACK ZOBACZY JS
                exclude: /node_modules/, // ZA WYJĄTKIEM FOLDERU NODE_MODULES
                loader: 'babel-loader', // UŻYJ LOADERA BABEL (ujednolica kod by był optymalny dla wszystkich przeglądarek)
                query: {
                    presets: ['es2015'] //WERSJA JS
                }
            },
            {
                test: /\.css$/, //JEŻELI WEBPACK ZOBACZY CSS
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, //JEŻELI WEBPACK ZOBACZY JS SCSS
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        filename: './js/out.js',
    }
}
