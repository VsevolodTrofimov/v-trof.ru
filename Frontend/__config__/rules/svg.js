module.exports = () => {
    return {
        test: /\.svg$/,
        use: ['preact-svg-loader'],
    }
}