import meals from "./db.json";

const connection = meals.createConnection({
});

const getConnection = () =>{
    return connection
};

module.exports = {
    getConnection
}
