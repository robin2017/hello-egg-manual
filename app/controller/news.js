const { Controller } = require('egg')
class NewsController extends Controller {
    async list() {
        //参数名 + 文件名 + 类的方法调用
        const data = await this.ctx.service.news.list()
        this.logger.debug('list: %j', data);
        this.ctx.body = data
    }
}
module.exports = NewsController
