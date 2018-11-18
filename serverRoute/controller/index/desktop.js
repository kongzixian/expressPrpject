/* 
* @Author: anchen
* @Date:   2018-11-18 19:35:56
* @Last Modified by:   anchen
* @Last Modified time: 2018-11-18 19:54:56
*/

/**
 * desktop > controller
 * @return {[type]} [description]
 */
exports.desktop = function (req, res) {
  res.render('desktop/index.art', {
    params: req.query
  })
}