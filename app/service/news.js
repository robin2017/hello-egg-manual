const { Service } = require('egg')
class NewsService extends Service {
    async list() {
        return { hello: 'world', name: 'robin' }
    }
}
module.exports = NewsService


