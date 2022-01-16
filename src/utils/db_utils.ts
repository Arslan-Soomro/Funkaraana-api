import db from "./database";
import { validateUserData, hashEncrypt } from "./utils";
import { USER_ATTRS } from "./global";

const createUserTable = async (drop = false) => {
    try{
        const tableName = "users";
        if(drop) await db.execute(`DROP TABLE IF EXISTS ${tableName}`);
        const result = await db.execute(`CREATE TABLE ${tableName}(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, type VARCHAR(1) NOT NULL DEFAULT 'B')`);
        //console.log(result);
    }catch(err){
        console.log("Error@createUserTable: " + err.message);
    }
};

export const getUserBy = async (byAttr, usernameStr, getAll = false) => {
    const getUserQuery = getAll ? `SELECT * FROM users WHERE ${byAttr} = ? LIMIT 1` : `SELECT ${USER_ATTRS} FROM users WHERE ${byAttr} = ? LIMIT 1`;

    const [rows] = await db.execute(getUserQuery, [usernameStr]);
    return rows[0];
}

export const userExists = async (usernameStr) => {
    const rows = await getUserBy("username", usernameStr);
    return rows != 0;//If exist then true else false
}

export const insertIntoUser = async (data) => {    
    //Data -> name, email, username, password
    const validationRes = validateUserData(data);
    if(!validationRes.error){

        if(!userExists(data.username)){
            data.password = await hashEncrypt(data.password);
            const insertionQuery = "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)";
            await db.execute(insertionQuery, [data.name, data.username, data.email, data.password]);
            return {message: "User Inserted Succesfully"}
        }
        
        return {message: "Username already exists", error: true};
    }
    //Incase there is an error return back the message
    return validationRes;
}

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
