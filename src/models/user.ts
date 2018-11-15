

import { DB , Schema } from '../DBinit';

let userSchema = new Schema({
    name: String,
    displayName: String,
    password: String,
    serialNum : String,
    email: String,
},{ versionKey: false });

const user = DB.model('user', userSchema);

export default user;
