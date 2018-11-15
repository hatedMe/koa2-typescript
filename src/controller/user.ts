

import { Context } from 'koa';

import { DB } from '../DBinit';
import user from '../models/user';



interface iQuery {
    serialNum : string , 
}

export default class UserController {
    public static async getUser (ctx : Context) {
        // const body = await new Promise<object>(function(resolve, reject) {
        //     user.findOne({})
        // });
        console.log( ctx.request );
        return ctx.body = 123
        const { serialNum } = ctx.body;
        const body = await user.findOne({serialNum});
        ctx.body = body
    }
}


                                                         
                                                                     
                                 
                                          
                                          
                             
                             