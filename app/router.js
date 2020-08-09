module.exports = app => {
    const { router, controller } = app
    //参数名 + 文件名 + 类的方法名
    router.get('/', controller.home.index)
    router.get('/news', controller.news.list)
}

