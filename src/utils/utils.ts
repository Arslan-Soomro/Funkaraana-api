import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "./global";
import { USER_DATA } from "./interfaces";

const isOfType = (str: string, type: string) => {
    if(str && typeof(str) === type){
        return true;
    }
    return false;
}

const validateEmail = (email: string) => {
    if(!isOfType(email, "string")) return false;

    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email) ? true : false;
}

export const validateName = (name: string) => {
    if(!isOfType(name, "string")) return false;

    return ((name.trim()).length > 1) ? true : false
};

export const validatePass = (pass: string) => {
    if(!isOfType(pass, "string")) return false;

    return pass.trim().length >= 8 ? true : false;
};

export const validateUserData = (uData: USER_DATA) => {
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

export const hashEncrypt = async (strToEncrypt: string) => {
    const saltRounds = 10;
    const encryptedStr = await bcrypt.hash(strToEncrypt, saltRounds);
    return encryptedStr;
};

export const verifyToken = (token: string) => {
    try{
        const data = jwt.verify(token, JWT_SECRET);
        return data;
    }catch(err){
        console.log("Error@TokenAuthentication: " + err.message);  
    }
    return null;
}