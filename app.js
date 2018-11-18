var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var route = require('./serverRoute/route')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 连接数据库 指定数据库不需要存在，当你插入第一条数据之后就自动被创建出来
mongoose.connect('mongoose://localhost/kong')
// 设计文档结构
// 字段名称就是结构中的属性名称
// 约束的目的时为了保证数据的完整性，不要脏数据
var useSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  passsword: {
    type: String,
    require: true
  },
  yzm: {
    type: String,
    require: true
  }
})

var Student = mongoose.model('Student', useSchema)

var student = new Student({
  'name': 'kong',
  'passsword': '123456',
  'yzm': '1234'
})
// student.save(function(err, ret){
//   if(err){
//     console.log('新增失败');
//     return false
//   }
//   console.log(ret)
// })

Student.find(function(err, ret){
  if(err){
    console.log('新增失败');
    return false
  }
  console.log(23424)
  console.log(ret)
})

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