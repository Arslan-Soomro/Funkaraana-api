import express from 'express';
const router = express.Router();

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { insertIntoUser, getUserBy, createUserTable } from '../utils/db_utils';
import { createToken, validateName, validatePass, verifyToken } from '../utils/utils';
import db from '../utils/database';
import { SERVER_ERR } from '../utils/global';
import { USER_DATA, USER_DATA_ALL } from "../utils/customTypes";
import { stringify } from 'querystring';

const { JWT_SECRET } = process.env;

//Route for creating user table
router.get('/createtable', async (req, res) => {
    try{
        createUserTable();
        res.status(200).json({message: "Table Created Succesfully"});
    }catch(err){
        res.status(500).json(SERVER_ERR);     
    }
});

//Route for getting all users
//TODO hide this route
router.get('/', async (req, res) => {

    try{
        const [rows] = await db.execute("SELECT * FROM users");
        
        let resMsg = "Found Users";
        if((<object[]> rows).length == 0){
            resMsg = "There are no Users";
        }

        res.status(200).json({message: resMsg, data: rows});
    }catch(err){
        console.log("Error@User:get: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

//Route to create a user
router.post('/signup', async (req, res) => {
    try{

        const userData: USER_DATA = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            type: "B"
        }

        const result: any = await insertIntoUser(userData);
        if(result.error){
            res.status(400).json({message: result.message});
        }else{
            res.status(200).json({message: "User Signed Up Successfully"});
        }
    }catch(err){
        console.log("Error@User:Signup: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

//Route to verify a user and generate a token
router.post('/login', async (req, res) => {
    try{
        const err_message = "Invalid Username or Password";
        if(req.body && req.body.token){
            //Incase a token is submitted, it must be handled here
            
            //tokenData -> id, username
            let tokenData = verifyToken(req.body.token);

            if(!tokenData){
                res.status(401).json({message: "Invalid Token"});
            }else{
                const userData = await getUserBy("id", tokenData.id);
                res.status(200).json({message: "Token Authenticated, Access Granted", data: userData});
            }

        }else if(req.body && validateName(req.body.username) && validatePass(req.body.password)){
            //Get User Details
            const rows = <USER_DATA_ALL> await getUserBy("username", req.body.username, true);
            //Verify Username and Password

            if(rows && await bcrypt.compare(req.body.password, rows.password)){
                const accessToken = createToken({id: rows.id, username: rows.username});
                res.status(200).json({message: "Login Succesful", data: {token: accessToken}});
            }else{
                res.status(400).json({message: err_message});
            }
        }else{
            res.status(400).json({message: err_message});
        }
    }catch(err){
        console.warn("Error@user:login: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

export default router;
