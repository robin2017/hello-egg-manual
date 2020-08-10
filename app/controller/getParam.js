const { Controller } = require('egg')
module.exports = class extends Controller {
    async query() {
        this.ctx.body = '获取到查询字符串name：' + this.ctx.query.name
    }
    async param() {
        this.ctx.body = '获取到命名参数：' + this.ctx.params.name
    }
}


