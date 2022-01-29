import express from "express";
const router = express.Router();

import {
  createProductTable,
  getUserBy,
  insertIntoProduct,
  productExistsById,
} from "../utils/db_utils";
import db from "../utils/database";
import { SERVER_ERR } from "../utils/global";
import { validateProductData, verifyToken } from "../utils/utils";
import {
  PRODUCT_DATA,
  PRODUCT_DATA_ALL,
  USER_DATA,
  USER_DATA_ALL,
} from "../utils/customTypes";
import upload from "../utils/multerUpload";

//Middleware to unfold token data
router.use((req, res, next) => {
  //If request contains a token, verify it
  if (req.body.token) {
    const tokenData = verifyToken(req.body.token);

    if (tokenData != null) {
      //token verified, pass down the user data

      req.body.USER = { id: tokenData.id, username: tokenData.username };
      next();
    } else {
      //token not right, send back a response telling this
      res.status(401).json({ message: "Unauthorized Access, Invalid Token" });
    }
  }
  //if no token is present, pass down without user data
  next();
});

//Route to get All Products
router.get("/all", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM products");
    let prodData: any = rows;

    let resMsg = "Found Products";
    if ((<object[]>rows).length == 0) {
      resMsg = "There are no Products";
    } else {
      for (let i = 0; i < prodData.length; i++) {
        const currentUser = await getUserBy("id", prodData[i].userID);
        prodData[i].seller = (currentUser as USER_DATA).name;
      }
    }

    //console.log(prodData);

    res.status(200).json({ message: resMsg, data: prodData });
  } catch (err) {
    console.log("Error@Products:get: " + err.message);
    res.status(500).json(SERVER_ERR);
  }
});

//get products of a user with specific id
router.get("/user/:id", async (req, res) => {
  try {
    if (req.params && req.params.id) {
      const query = "SELECT * FROM products WHERE userID = ?";
      const [rows] = await db.execute(query, [parseInt(req.params.id)]);
      const prodData: any = rows;

      if ((<object[]>rows).length == 0) {
        res.status(404).json({ message: "There are no Products" });
      } else {
        //Insert Seller Info
        for (let i = 0; i < prodData.length; i++) {
          const currentUser = await getUserBy("id", prodData[i].userID);
          prodData[i].seller = (currentUser as USER_DATA).name;
        }

        res.status(200).json({ message: "Found Products", data: prodData });
      }
    } else {
      res.status(400).json({ message: "Invalid Request" });
    }
  } catch (err) {
    console.log("Error@Products:get:user:id " + err.message);
    res.status(500).json(SERVER_ERR);
  }
});

//Get a product with specific id
router.get("/id/:id", async (req, res) => {
  try {
    if (req.params && req.params.id) {
      const query = "SELECT * FROM products WHERE id = ?";
      const [rows] = await db.execute(query, [parseInt(req.params.id)]);
      let prodData: any = rows;

      if ((<object[]>rows).length == 0) {
        res.status(404).json({ message: "There are no Products" });
      } else {
          prodData = prodData[0];
          const currentUser = await getUserBy("id", prodData.userID);
          prodData.seller = (currentUser as USER_DATA).name;
        

        res.status(200).json({ message: "Found Products", data: prodData });
      }
    } else {
      res.status(400).json({ message: "Invalid Request" });
    }
  } catch (err) {
    console.log("Error@Products:get:id " + err.message);
    res.status(500).json(SERVER_ERR);
  }
});

//Route to insert a product
//The token handling is done separately here because req.body is only defined here with image because of multer
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (req.body.token) {
      const tokenData = verifyToken(req.body.token);
      if (tokenData === null) {
        res.status(401).json({ message: "Invalid Token" });
        return;
      } else {
        req.body.USER = { id: tokenData.id };
      }
    } else {
      res.status(401).json({ message: "Invalid Token" });
      return;
    }

    const prodData: PRODUCT_DATA = {
      userID: req.body.USER.id,
      name: req.body.name,
      description: req.body.description,
      price: parseFloat(req.body.price),
      image: req.file?.filename!,
    };

    const validationRes = validateProductData(prodData);

    //There is no validation Error
    if (!validationRes.error) {
      insertIntoProduct(prodData);
      res.status(200).json({ message: "Product Added Successfully" });
    } else {
      res.status(400).json({ message: validationRes.message });
    }
  } catch (err) {
    console.log("Error@Add:Product " + err.message);
    res.status(500).json(SERVER_ERR);
  }
});

//Route to delete a product using an id
router.post("/del", async (req, res) => {
  //Data -> id (product id)
  try {
    if (req.body.token) {
      if (await productExistsById(req.body.id)) {
        const query = `DELETE FROM products WHERE id = ${req.body.id}`;
        await db.execute(query);
        res.status(200).json({ message: "Product Deleted Succesfully" });
      } else {
        res.status(400).json({ message: "Invalid Product ID" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized Access, Invalid Token" });
    }

    res.end();
  } catch (err) {
    console.log("Error@DeleteProduct: " + err.message);
    res.status(500).json(SERVER_ERR);
  }
});

//Route to create a table
router.get("/createtable", async (req, res) => {
  try {
    createProductTable();
    res.status(200).json({ message: "Table Created Succesfully" });
  } catch (err) {
    res.status(500).json(SERVER_ERR);
  }
});

export default router;
