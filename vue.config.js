const path = require('path')


module.exports = {
    lintOnSave:false,
    // 代理
   /*  devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                chnageOrigin: true,
                pathRewrite : {
                    '^/api':'/api'
                }
            }
        }
    },
     */

    // 路径配置
    configureWebpack:(config)=>{
        config.resolve = {
            extensions:['.js','.json','.vue'],
            alias: {
                '@':path.resolve(__dirname,'./src')
            }
        }
    }

}