







import * as Koa from 'koa';
import * as Router from 'koa-router';


const app = new Koa();
// const router = new Router();


// router.get('/', ctx =>{
//     ctx.body = 'hi koa and ts@@@'
// });

import { router } from './router/index';
app.use(router.routes()).use(router.allowedMethods());

// app.use( router.routes() );


app.listen(3000 , () =>{
    console.log("Sever is running on port in 5000");
})