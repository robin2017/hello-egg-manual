const path = require('path')
const { dirname } = require('path')
exports.keys = "1234567"
//可以修改egg-static的默认配置
exports.static = {
    prefix: '/public/',
    dir: path.join(__dirname, '../', 'app/public')
}


