// https://habr.com/ru/articles/701724/ - сборка webpack
// https://jinv.ru/Sozdanie-saytov/pug-loader-i-pug3/ - подключение pug-loader

const path = require('path')
const PugPlugin = require('pug-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.pug'),
        'order-service': path.join(__dirname, 'src', 'order-service.pug')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]')
    },
    plugins: [
        new PugPlugin(),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join('src', 'static'),
                            destination: 'dist',
                        },
                    ],
                },
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: PugPlugin.loader
            },
            {
                test: /\.(scss|css)$/,
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
}