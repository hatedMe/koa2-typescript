


import * as Router from 'koa-router';
import { user } from '../controller/index';

const router = new Router();


router.use( '*' , async (ctx , next) =>{
    console.log( ctx.originalUrl , '==============>' );
    await next();
})


router.get('/user' , user.getUser );



export { router };


