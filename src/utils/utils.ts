bcrypt = require("bcrypt");  
jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("./global");

const isOfType = (str, type) => {
    if(str && typeof(str) === type){
        return true;
    }
    return false;
}

const validateEmail = (email) => {
    if(!isOfType(email, "string")) return false;

    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email) ? true : false;
}

const validateName = (name) => {
    if(!isOfType(name, "string")) return false;

    return ((name.trim()).length > 1) ? true : false
};

const validatePass = (pass) => {
    if(!isOfType(pass, "string")) return false;

    return pass.trim().length >= 8 ? true : false;
};

const validateUserData = (uData) => {
    if(uData){
        if(uData.name && uData.username && uData.password && uData.email){
            if(validateName(uData.name)){
                if(validateEmail(uData.email)){
                    if(validatePass(uData.password)){
                        if(validateName(uData.username)){
                            return ({message: 'All Entries are filled properly'});
                        }else{
                            return ({message: 'User name must contain more than 8 characters', error: true});
                        }
                    }else{
                        return ({message: 'Password must contain more than 8 characters', error: true});
                    }
                }else{
                    return ({message: "Invalid Email Address", error: true});
                }
            }else{
                return ({message: 'Full name must contain more than 1 characters', error: true});
            }
        }else{
            return ({message: 'One of the entries is missing.', error: true})
        }
    }
    return ({message: 'User Data not Provided', error: true});
}

const hashEncrypt = async (strToEncrypt) => {
    const saltRounds = 10;
    const encryptedStr = await bcrypt.hash(strToEncrypt, saltRounds);
    return encryptedStr;
};

const verifyToken = (token) => {
    try{
        const data = jwt.verify(token, JWT_SECRET);
        return data;
    }catch(err){
        console.log("Error@TokenAuthentication: " + err.message);  
    }
    return null;
}

module.exports = { validateName, validatePass, validateUserData, hashEncrypt, verifyToken };