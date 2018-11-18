var express = require('express')

var index = require('./index')

// 创建route容器
var route = express.Router()
index(route)

module.exports = route
