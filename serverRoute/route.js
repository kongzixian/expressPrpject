var express = require('express')

var base = require('./base')

// 创建route容器
var route = express.Router()
base(route)

module.exports = route
