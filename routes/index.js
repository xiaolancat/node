var express = require('express');
var router = express.Router();

// 引入前台控制器
var indexController = require('../controllers/indexController');

/* 首页  */
router.get('/',indexController.index);
//详情页
router.get('/xlist/:_id',indexController.xlist);
router.get('/articlecontent/:_id',indexController.articlecontent);
module.exports = router;
