/* 
* @Author: kong
* @Date:   2018-11-18 19:35:56
* @Last Modified by:   anchen
* @Last Modified time: 2018-11-19 14:22:02
*/

/**
 * desktop > controller
 * @return {[type]} [description]
 */
var UserMongodb = require('./userMongodb')
exports.desktop = function (req, res) {
  
  res.render('desktop/index.art', {
    params: req.query
  })
}