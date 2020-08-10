module.exports = app => {
    const { router, controller } = app
    //router.verb('path-match', app.controller.action);
    router.get('/', controller.home.index)
    router.get('/news', controller.news.list)
    router.get('/getParamQ', controller.getParam.query)
    router.get('/getParamP/:name', controller.getParam.param)
}

