module.exports = function(route){

  route.get('/', function(req, res){
    // res.render('index.art')
    res.redirect('/desktop')
  })
  route.get('/desktop', function(req, res){
    res.render('desktop/index.art')
  })
}