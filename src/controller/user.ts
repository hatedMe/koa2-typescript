

import { BaseContext } from 'koa';


export default class UserController {
    public static async getUser (ctx : BaseContext) {
        let body  = await new Promise(function(resolve, reject) {
            setTimeout(function () {
                resolve('ok')
            }, 2000);
        });
        ctx.status = 200;
        ctx.body = body;
    }
}
