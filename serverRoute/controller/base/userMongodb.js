var mongoose = require('mongoose')


// 连接数据库 指定数据库不需要存在，当你插入第一条数据之后就自动被创建出来
// mongoose.connect('mongoose://localhost/kong', { useMongoClient: true })
mongoose.connect('mongodb://localhost/kong')
var Schema = mongoose.Schema


// 设计文档结构
// 字段名称就是结构中的属性名称
// 约束的目的时为了保证数据的完整性，不要脏数据
var studebtSchema = new Schema({
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

var Student = mongoose.model('Student', studebtSchema)


var student = new Student({
  'name': 'kong3',
  'passsword': '111111',
  'yzm': '222222'
})

module.exports = mongoose.model('Student', studebtSchema)
// 新增数据
// student.save(function(err, ret){
//   if(err){
//     console.log('新增失败');
//     return false
//   }
//   console.log(ret)
// })

// 查询数据 
// Student.find(function(err, ret){
//   if(err){
//     console.log('查询失败');
//     return false
//   }
//   console.log(ret)
// })

//删除数据
// Student.deleteOne({ 
//   // _id: '5bf185fa3f91c2d32cfb2131',
//   name: 'kong'
// },function(err, ret){
//   if(err){
//     console.log('删除失败');
//     return false
//   }
//   console.log(ret)
// })

// Student.updateOne({ name: 'kong01' }, { name: 'kong1' }, function(err, res) {
//   // Updated at most one doc, `res.modifiedCount` contains the number
//   // of docs that MongoDB updated
// });