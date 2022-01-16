const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { insertIntoUser, getUserBy } = require('../utils/db_utils');
const { validateName, validatePass, verifyToken } = require('../utils/utils')
const db = require('../utils/database');
const { SERVER_ERR, JWT_SECRET } = require("../utils/global");


router.get('/', async (req, res) => {

    try{
        const [rows] = await db.execute("SELECT * FROM users");
        
        let resMsg = "Found Users";
        if(rows.length == 0){
            resMsg = "There are no Users";
        }

        res.status(200).json({message: resMsg, data: rows});
    }catch(err){
        console.log("Error@User:get: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

router.post('/signup', async (req, res) => {

    try{
        const result = await insertIntoUser(req.body);
        if(result.error){
            res.status(400).json({message: result.message});
        }else{
            res.status(200).json({message: "User Inserted Successfully"});
        }
    }catch(err){
        console.log("Error@User:Signup: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

//TODO deal with token submission

router.post('/login', async (req, res) => {
    try{
        const err_message = "Invalid Username or Password";
        if(req.body && req.body.token){
            //Incase a token is submitted it must be handled here
            
            //tokenData -> id, username
            let tokenData = verifyToken(req.body.token);

            if(!tokenData){
                res.status(401).json({message: "Invalid Token"});
            }else{
                userData = await getUserBy("id", tokenData.id);
                res.status(200).json({message: "Token Authenticated, Access Granted", data: userData});
            }

        }else if(req.body && validateName(req.body.username) && validatePass(req.body.password)){
            //Get User Details
            const rows = await getUserBy("username", req.body.username);
            //Verify Username and Password
            if(rows.length != 0 && await bcrypt.compare(req.body.password, rows.password)){
                //Generate and respond with a token
                const accessToken = await jwt.sign({id: rows.id, username: rows.username}, JWT_SECRET, {expiresIn: '24h'});
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

module.exports = router;