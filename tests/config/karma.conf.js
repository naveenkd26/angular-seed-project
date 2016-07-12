module.exports = function(config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
            '*.js'
        ],
        browsers : ['Chrome']
    })
}