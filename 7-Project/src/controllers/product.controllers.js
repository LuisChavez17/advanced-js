import { getConnection } from "./../services/Connection"


const getDataRest = async (req, res) => {
    try {
        const connection = await getConnection();
        const data = await connection;
        res.json(data)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
const getMeals = async (req, res) => {
    try {
        const connection = await getConnection();
        const data = await connection;
        res.json(data.meals)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}
const getMealsbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const data = await connection.meals.find(((meal => meal.id === parseInt(id))));
        res.json(data)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const addNewMeal = async (req, res) =>{
    try{
        const { id, name, price, content, categoryid } = req.body;
        if (id === undefined || name === undefined || price === undefined || content === undefined || categoryid === undefined ){
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }
        const connection = await getConnection();
        const data = await connection.meals.push(((newMeal =>(`id`, `name`, `price`, `content`, `categoryid`) === "?,?,?,?,?," [id, name, price, content, categoryid])));
        res.json(data)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}



export const methods = {
    getDataRest,
    getMeals,
    getMealsbyId,
    addNewMeal
    // updateMeal,
    // deleteMeal

}