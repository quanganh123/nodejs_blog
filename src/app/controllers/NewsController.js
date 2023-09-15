class NewsController{
    index(req, res){
        res.render('news');
    };
    show(req, res){
        res.render('nodejs');
    };
};

module.exports = new NewsController;