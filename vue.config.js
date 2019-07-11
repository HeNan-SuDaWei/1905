

const path = require('path');
module.exports = {
    devServer: {
        open: true,
        proxy:{
            
            "/a": {
                target: "https://www.jianshu.com",
                changOrigin: true,
                pathRewrite: {
                    pathRewrite: {
                        '^/a': '/'
                    }

                }
            },
            configureWebpack: {
                resolve: {
                    alias: {
                        "@": path.resolve(__dirname, "./src/"),
                        "api": path.resolve(__dirname, "./src/api/"),
                        "assets": path.resolve(__dirname, "./src/assets/"),
                        "common": path.resolve(__dirname, "./src/common/"),
                        "components": path.resolve(__dirname, "./src/components/"),
                        "router": path.resolve(__dirname, "./src/router/"),
                        "store": path.resolve(__dirname, "./src/store/"),
                        "utils": path.resolve(__dirname, "./src/utils/"),
                        "views": path.join(__dirname, "./src/views/"),

                    }

                }
            }

        }
    }
}
