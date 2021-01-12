const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default
require("@babel/polyfill");
const path = require('path'); //Чтобы не напутать с путями
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",

    entry: {
        index: ["@babel/polyfill", "./app/index.js"],
        // catalog: ["@babel/polyfill", "./app/catalog.js"],
    }, //Какой модуль собирать


    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js" //Куда выводить //Можно выводить в файл а не создаваться каждый раз новый
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "app/index.html"),
            inject: "head",
            scriptLoading: "defer"
        }),
        
        

        // new HtmlWebpackPlugin({
        //     filename: 'catalog.html',
        //     template: path.resolve(__dirname, "app/catalog.html"),
        //     inject: "head",
        //     scriptLoading: "defer"
        // }),

        new CleanWebpackPlugin(),

        // new CopyPlugin({
        //     patterns: [
        //         // { from: "app/images", to: "images" },
        //         // { from: "app/scss", to: "scss" },
        //         // { from: "app/components", to: "components" },
        //         // { from: "app/js", to: "js" },
        //         // { from: "app/html", to: "html" },
        //       ],
        //       options: {
        //         concurrency: 100,
        //       },
        //   }),

        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
              quality: '95-100'
            }
          })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',
                                  "@babel/preset-react",
                                  {
                                    'plugins': ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-react-jsx-source']
                                  }
                        ]
                    }
                }
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], //Чтение массива идет справа налево!
            },

            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"], //Чтение массива идет справа налево!
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: "file-loader"
                }], //Чтение массива идет справа налево!
            },

        ],
    },
};
// module.exports = {
//     mode: "production",

//     entry: {
//         index: ["@babel/polyfill", "./app/index.js"],
//         // catalog: ["@babel/polyfill", "./app/catalog.js"],
//     }, //Какой модуль собирать

//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "index.js" //Куда выводить //Можно выводить в файл а не создаваться каждый раз новый
//     },

//     plugins: [

//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.resolve(__dirname, "app/index.html"),
//             inject: "head",
//             scriptLoading: "defer"
//         }),

//         new CleanWebpackPlugin(),

//         new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

//         new ImageminPlugin({
//             disable: process.env.NODE_ENV !== 'production', // Disable during development
//             pngquant: {
//               quality: '95-100'
//             }
//           })
//     ],

//     module: {
//         rules: [
//             {
//                 test: /\.m?js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ['@babel/preset-env',
//                                   "@babel/preset-react",
//                                   {
//                                     'plugins': ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-react-jsx-source']
//                                   }
//                         ]
//                     }
//                 }
//             },

//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"], //Чтение массива идет справа налево!
//             },

//             {
//                 test: /\.s[ac]ss$/i,
//                 use: ["style-loader", "css-loader", "sass-loader"], //Чтение массива идет справа налево!
//             },

//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [{
//                     loader: "file-loader"
//                 }], //Чтение массива идет справа налево!
//             },

//         ],
//     },
// };