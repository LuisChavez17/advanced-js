import meals from "./db.json";

const connection = meals;

const getConnection = () =>{
    return connection
};

module.exports = {
    getConnection
}
