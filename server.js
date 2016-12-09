let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config),config.devServer)
    .listen(3000,'localhost',function(err,result){
        if(err) console.log(err);
        console.log('listening at localhost:3000');

        open('http://localhost:3000/webpack-dev-server/');
    });