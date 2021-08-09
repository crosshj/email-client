const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(__dirname + '/db.json')
const middlewares = jsonServer.defaults({
    static: 'dist'
});
const port = 2021;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`)
});
