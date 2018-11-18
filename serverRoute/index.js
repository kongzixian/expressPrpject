var desktop = require('./controller/index/index')
module.exports = function(route){

  route.get('/', function(req, res){
    // res.render('index.art')
    res.redirect('/login')
  })
  // 登录页
  route.get('/login', function(req, res){
    res.render('login/index.art')
  })
  // 主体框架
  route.get('/desktop', function(req, res){
    // 进入网站主体框架
    desktop.desktop(req, res) 
  })
}