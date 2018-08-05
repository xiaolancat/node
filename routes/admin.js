var express = require('express');
var router = express.Router();

// 引入后台控制器
var adminController = require('../controllers/adminController');

// 登录的页面
router.get('/login',adminController.login);
// 登录操作
router.post('/doLogin',adminController.doLogin);
// 退出登录
router.get('/logout',adminController.logout);

/* 首页 */
router.get('/',adminController.Index);

// 添加栏目
router.get('/itemAdd', adminController.itemAdd);
// 插入栏目数据
router.post('/itemInsert', adminController.itemInsert);
// 栏目列表
router.get('/itemList', adminController.itemList);
// 修改栏目页面
router.get('/itemEdit/:_id',adminController.itemEdit);
// 修改栏目数据
router.post('/itemUpdate',adminController.itemUpdate);
// 删除栏目
router.get('/itemRemove/:_id', adminController.itemRemove);
// 发布文章
router.get('/articleAdd',adminController.articleAdd);
// 插入文章数据
router.post('/articleInsert',adminController.articleInsert);
// 文章列表
router.get('/articleList', adminController.articleList)
// 删除文章
router.get('/articleRemove/:_id', adminController.articleRemove);
// 编辑文章
router.get('/articleEdit/:_id', adminController.articleEdit);
// 修改文章的文本
router.post('/articleUpdate', adminController.articleUpdate)
// 修改文章的封面
router.post('/articleUpdateImage', adminController.articleUpdateImage);
// 添加友链
router.get('/ahrefAdd', adminController.ahrefAdd);
// 插入友链数据
router.post('/ahrefInsert', adminController.ahrefInsert);
// 友链列表
router.get('/ahrefList', adminController.ahrefList);
// 修改友链页面
router.get('/ahrefEdit/:_id',adminController.ahrefEdit);
// 修改友链数据
router.post('/ahrefUpdate',adminController.ahrefUpdate);
// 删除友链
router.get('/ahrefRemove/:_id', adminController.ahrefRemove)
// 验证码接口
router.get('/code',adminController.code);


module.exports = router;