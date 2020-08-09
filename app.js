module.exports = app => {
    app.once('server', server => {
        console.log('服务启动，当前环境：',app.config.env)
      // websocket
    });
    app.on('error', (err, ctx) => {
      // report error
    });
    app.on('request', ctx => {
      console.log('接收到http请求：',ctx.req)
    });
    app.on('response', ctx => {
      // ctx.starttime is set by framework
      const used = Date.now() - ctx.starttime;
      // log total cost
    });
  };