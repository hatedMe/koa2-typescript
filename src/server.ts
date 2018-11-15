







import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as DBinit from './DBinit';
import * as Koabody from 'koa-body';



const app = new Koa();

// DBinit.connect();


import { router } from './router/index';
// app.use( Koabody() );

// app.use((ctx ,next ) => {
//     // ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
//     console.log( ctx.request.body );
//     next();
// });

// app.use( Koabody() );
app.use(router.routes()).use(router.allowedMethods());

// app.use( router.routes() );


app.listen(3000 , () =>{
    console.log("Sever is running on port in 5000");
})