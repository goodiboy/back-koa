import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import Router from 'koa-router'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'

const isDevMode = process.env.NODE_ENV !== 'production';


const app = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'hello webpack-node'
})

// 整合中间件
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  helmet()
])

if (!isDevMode){
  // 压缩中间件
  app.use(compress())
}

app.use(middleware)
  .use(router.routes())

app.listen(3000)

