// 声明一个 前台的控制器 模块
var indexController = {};

// 引入 数据库模型 模块
var itemModel = require('../models/itemModel');
var articleModel = require('../models/articleModel');
var ahrefModel = require('../models/ahrefModel');
// 首页
indexController.index = function(req, res, next) {
	// 获取栏目列表
	ahrefModel.find(function(err,data2){
    itemModel.find().sort({order:1}).exec(function(err,data){
        if (err) {
            console.log('数据添加数据失败');
        } else {
        	getArticleDataList(0)
        	// 根据 itemId 去查 10 条文章
        	function getArticleDataList(i){
        		articleModel.find({itemId:data[i]._id}).limit(10).exec(function(error,data1){
        			data[i].articleList = data1;
        			if(i < data.length - 1){
        				// 继续查询下一个栏目的 10 条文章
        				getArticleDataList(++i);
        			}else{	
			            // 已经是最后一个栏目了 直接 响应模版 分配数据
						res.render('index', { ahreflist:data2,itemlist: data });
        			}
        		});
        	}
        }
	})
	})
}
indexController.xlist=function(req,res,next){	
	itemModel.find({_id:req.params._id},function(err,data){
		articleModel.find({itemId:req.params._id}).exec(function(error,data1){
			itemModel.find().sort({order:1}).exec(function(err,datalist){
				ahrefModel.find(function(err,data2){	
					res.render('xlist', { data:data,articlelist:data1,itemlist:datalist,ahreflist:data2});
				})
			})
		});
	})

}
indexController.articlecontent=function(req,res,next){	
	articleModel.find({_id:req.params._id}).exec(function(error,data1){
		itemModel.find().sort({order:1}).exec(function(err,datalist){
			ahrefModel.find(function(err,data2){	
				res.render('articlecontent', {articlelist:data1,itemlist:datalist,ahreflist:data2});
			})
		})
	});
}



// 暴露控制器
module.exports = indexController;