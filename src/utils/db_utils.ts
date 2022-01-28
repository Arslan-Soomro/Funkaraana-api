import db from "./database";
import { validateUserData, hashEncrypt, validateProductData } from "./utils";
import { USER_ATTRS } from "./global";
import { PRODUCT_DATA, USER_DATA, USER_DATA_ALL } from "./customTypes";

export const createUserTable = async (drop = false) => {
  try {
    const tableName = "users";
    if (drop) await db.execute(`DROP TABLE IF EXISTS ${tableName}`);
    const constraints =
      "id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, type VARCHAR(1) NOT NULL DEFAULT 'B'";
    const result = await db.execute(
      `CREATE TABLE ${tableName}(${constraints})`
    );
  } catch (err) {
    console.log("Error@createUserTable: " + err.message);
  }
};

export const createProductTable = async (drop = false) => {
  try {
    const tableName = "products";
    if (drop) await db.execute(`DROP TABLE IF EXISTS ${tableName}`);
    const constraints =
      "userID INT NOT NULL, id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, price INT NOT NULL, image varchar(255) NOT NULL, FOREIGN KEY (userID) REFERENCES users(id)";
    const result = await db.execute(
      `CREATE TABLE ${tableName}(${constraints})`
    );
  } catch (err) {
    console.log("Error@createProductTable: " + err.message);
  }
};

export const getUserBy = async (
  byAttr: string,
  byAttrVal: string | number,
  getAll = false
) => {
  const getUserQuery = getAll
    ? `SELECT * FROM users WHERE ${byAttr} = ? LIMIT 1`
    : `SELECT ${USER_ATTRS} FROM users WHERE ${byAttr} = ? LIMIT 1`;

  const [rows] = await db.execute(getUserQuery, [byAttrVal]);
  if (rows != undefined) return (<object[]>rows)[0];
  else return undefined;
};

export const getProductBy = async (
  byAttr: string,
  byAttrVal: string | number
) => {
  const getUserQuery = `SELECT * FROM products WHERE ${byAttr} = ? LIMIT 1`;

  const [rows] = await db.execute(getUserQuery, [byAttrVal]);
  return (<object[]>rows)[0];
};

export const productExistsById = async (productID: number) => {
  if (productID != null && productID != undefined) {
    const rows = await getUserBy("id", productID);
    return (<object[]>rows).length != 0; //If exist then true else false
  } else {
    return false;
  }
};

export const userExists = async (usernameStr: string) => {
  const rows = await getUserBy("username", usernameStr);

  return rows != undefined && (<USER_DATA_ALL[]>rows).length != 0; //If exist then true else false
};

export const userExistsById = async (userID: number) => {
  if (userID != null && userID != undefined) {
    const rows = await getUserBy("id", userID);
    return (<object[]>rows).length != 0; //If exist then true else false
  } else {
    return false;
  }
};

export const insertIntoUser = async (data: USER_DATA) => {
  //Data -> name, email, username, password
  const validationRes = validateUserData(data);
  if (!validationRes.error) {
    if (!(await userExists(data.username))) {
      data.password = await hashEncrypt(data.password);

      const insertionQuery =
        "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)";
      await db.execute(insertionQuery, [
        data.name,
        data.username,
        data.email,
        data.password,
      ]);
      return { message: "User Inserted Succesfully" };
    }

    return { message: "Username already exists", error: true };
  }
  //Incase there is an error return back the message
  return validationRes;
};

export const insertIntoProduct = async (data: PRODUCT_DATA) => {
  //Data -> user_id, name, description, price, image
  const validationRes = validateProductData(data)!;
  if (!validationRes.error) {
    //Check if user id is correct and then insert

    if (await userExistsById(data.user_id)) {
      const insertionQuery =
        "INSERT INTO products (userID, name, description, price, image) VALUES (?, ?, ?, ?, ?)";
      await db.execute(insertionQuery, [
        data.user_id,
        data.name,
        data.description,
        data.price,
        data.image,
      ]);
      return { message: "Product Inserted Succesfully" };
    }
  }
  //Incase there is an error return back the message
  return validationRes;
};

//createUserTable();
/*
insertIntoUser({
    name: "Rashid",
    username: "rs108",
    email: "rs108@gmail.com",
    password: "Usdinwalilarki"
});
*/
//getAllUsers();
