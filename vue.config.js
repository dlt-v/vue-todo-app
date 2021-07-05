module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/_shared.scss";'
            }
        }
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
          },
        },
      },
};