var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var route = require('./serverRoute/route')


// 开放静态服务资源
app.use('/public/',express.static('./public/'))
// 配置模板引擎
app.engine('art', require('express-art-template'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(route)
// 监听3000端口，启动服务
app.listen(3000,function(){
  console.log('server is runing...')
})