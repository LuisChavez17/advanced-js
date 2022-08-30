import {getConnection} from "./../services/Connection"


const getMeals = async (req, res) =>{
    try{
        const connection = await getConnection();
        const data = await connection;
        res.json(data)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getMeals,
    // getMeal,
    // addMeal,
    // updateMeal,
    // deleteMeal

}