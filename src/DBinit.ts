






import * as mongoose from 'mongoose';

;( mongoose as any ).Promise = global.Promise;


export const DB = mongoose;
export const { Schema } = mongoose;



export const connect = (): mongoose.Connection => {
    DB.connect(`url`,{useNewUrlParser:true});

    let db = DB.connection;
    db.once('open',function() : void {
        console.info(`listening on port && 数据库连接成功 =======> ok`);
    });
    return db;
}
