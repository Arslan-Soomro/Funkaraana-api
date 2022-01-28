import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import database from "./database";

import { JWT_SECRET } from "./global";
import { PRODUCT_DATA, USER_DATA } from "./customTypes";

const isOfType = (item: any, type: string) => {
    if(item && typeof(item) === type){
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

    return (name && (name.trim()).length > 1) ? true : false
};

export const validatePass = (pass: string) => {
    if(!isOfType(pass, "string")) return false;

    return pass.trim().length >= 8 ? true : false;
};

export const validateUserData = (uData: USER_DATA): {message: string, error: boolean} => {
    if(uData){
        if(uData.name && uData.username && uData.password && uData.email){
            if(validateName(uData.name)){
                if(validateEmail(uData.email)){
                    if(validatePass(uData.password)){
                        if(validateName(uData.username)){
                            return ({message: 'All Entries are filled properly', error: false});
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

export const validateProductData = (data: PRODUCT_DATA): {message: string, error: boolean} => {
    //Data -> user_id, name, description, price, image
    if(data){
        if(data.name && data.description && data.price && data.image){
            if(isOfType(data.user_id, "number")){
                if(validateName(data.name)){
                    if(validateName(data.description)){
                        if(isOfType(data.price, "number")){
                            if(validateName(data.image)){
                                return ({message: 'All Entries are filled properly', error: false});
                            }else{
                                return ({message: 'Image link is not valid', error: true});
                            }
                        }else{
                            return ({message: 'Price must be a number', error: true});
                        }
                    }else{
                        return ({message: 'Product Description must contain more than 1 characters', error: true});
                    }
                }else{
                    return ({message: 'Product name must contain more than 1 characters', error: true});
                }
            }else{
                return ({message: 'User id must be a number', error: true});
            }
        }else{
            return ({message: 'One of the entries is missing.', error: true});
        }
    }
    return ({message: 'Corrupt Data Received', error: true});
}

export const hashEncrypt = async (strToEncrypt: string) => {
    const saltRounds = 10;
    const encryptedStr = await bcrypt.hash(strToEncrypt, saltRounds);
    return encryptedStr;
};

export const verifyToken = (token: string) => {
    try{
        //token data
        const data = jwt.verify(token, JWT_SECRET);
        return data;
    }catch(err){
        console.log("Error@TokenAuthentication: " + err.message);  
    }
    return null;
}