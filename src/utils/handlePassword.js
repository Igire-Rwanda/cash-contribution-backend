import bcrypt from"bcrypt";
import dotenv from "dotenv";
dotenv.config({path:"../../"});
class password{
    //return cyfertext of password
static encryptPassword(pswd){
    //
return bcrypt.hashSync(pswd,parseInt(process.env.SALT));
}

//return if password is matching
static checkPassword(hashedPswd,normalPswd){
    return bcrypt.compareSync(normalPswd,hashedPswd)
}
}
export default password;