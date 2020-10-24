
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleaware from 'webpack-dev-middleware';
import config from '../../webpack.dev.config.js';

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)

app.use(webpackDevMiddleaware(compiler,{
    publicPath: config.output.publicPath
}))


app.get('*', (req,res, next)=>{
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result)=>{
        if(err){
            return next(err);
        }
        res.set('content-type','text/html');
        res.send(result);
        res.end()
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`App listening to ${PORT}....`);
    console.log('Press CTRL+c to exit.');
})


