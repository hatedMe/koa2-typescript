


import * as Router from 'koa-router';
import * as Koabody from 'koa-body';
import { user } from '../controller/index';

const router = new Router();


router.use( '*' , async (ctx , next) =>{
    console.log( ctx.originalUrl , '==============>' );
    await next();
})

// user.getUser
router.post('/user', Koabody() , ctx =>{
    
    console.log( JSON.stringify( ctx.request.body) );
    ctx.body = 456
});



export { router };


