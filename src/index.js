import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './router/routers'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'

const isDevMode = process.env.NODE_ENV !== 'production';


const app = new Koa()


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
  .use(router())

app.listen(3000)

