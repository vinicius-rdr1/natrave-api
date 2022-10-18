import Koa from 'koa';
import bodyParsen from 'koa-bodyparser'
import cors from '@koa/cors'
import { router } from './router.js'


export const app = new Koa();

app.use(cors())
app.use(bodyParsen())

app.use(router.routes())
app.use(router.allowedMethods());

