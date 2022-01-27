import express from 'express';
const router = express.Router();

import { createProductTable, insertIntoProduct, productExistsById } from '../utils/db_utils';
import db from '../utils/database';
import { SERVER_ERR } from '../utils/global';
import { verifyToken } from "../utils/utils";
import { PRODUCT_DATA } from "../utils/customTypes";

//Middleware to unfold token data
router.use((req, res, next) => {

    //If request contains a token, verify it
    if(req.body.token){
        const tokenData = verifyToken(req.body.token);
        if(tokenData != null){
            //token verified, pass down the user data
            req.body.USER = {id: tokenData.id, username: tokenData.username};
            next();
        }else{
            //token not right, send back a response telling this
            res.status(401).json({message: "Unauthorized Access, Invalid Token"});
        }
    }
    //if no token is present, pass down without user data
    next();
})

//Route to get All Products
router.get('/', async (req, res) => {
    try{
        const [rows] = await db.execute("SELECT * FROM products");
        
        let resMsg = "Found Products";
        if((<object[]> rows).length == 0){
            resMsg = "There are no Products";
        }

        res.status(200).json({message: resMsg, data: rows});
    }catch(err){
        console.log("Error@Products:get: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

//Route to insert a product
router.post('/', async (req, res) => {
    try{
        if(req.body.token){

            //FIXME remove any type
            const prodData: PRODUCT_DATA = {
                user_id: req.body.USER.id,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }

            const result: any = await insertIntoProduct(prodData);
            if(result.error){
                res.status(400).json({message: result.message});
            }else{
                res.status(200).json({message: "Product Inserted Succesfully"});
            }
        }else{
            res.status(401).json({message: "Unauthorized Access, Invalid Token"});
        }
    }catch(err){
        console.log("Error@User:Signup: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

//Route to delete a product using an id
router.post('/', async (req, res) => {
    //Data -> id (product id)
    try{
        if(req.body.token){
            if(await productExistsById(req.body.id)){
                const query = `DELETE FROM products WHERE id = ${req.body.id}`;
                await db.execute(query);
                res.status(200).json({message: "Product Deleted Succesfully"});
            }else{
                res.status(400).json({message: "Invalid Product ID"});
            }
        }else{
            res.status(401).json({message: "Unauthorized Access, Invalid Token"});
        }
    }catch(err){
        console.log("Error@DeleteProduct: " + err.message);
        res.status(500).json(SERVER_ERR);
    }
});

//Route to create a table
router.get('/createtable', async (req, res) => {
    try{
        createProductTable();
        res.status(200).json({message: "Table Created Succesfully"});
    }catch(err){
        res.status(500).json(SERVER_ERR);
    }
});

export default router;