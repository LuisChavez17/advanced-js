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

const addNewMeal = async (req, res) => {

    try {
        const { id, name, price, content, categoryID } = req.body;
        if (id === undefined || name === undefined || price === undefined || content === undefined || categoryID === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." })
        }
        const connection = await getConnection();
        const data = await connection.meals.push({ id, name, price, content, categoryID });
        res.json(data)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const updateMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, content, categoryID } = req.body;
        if (name === undefined || price === undefined || content === undefined || categoryID === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." })
        }
        const connection = await getConnection();
        const data = await connection.meals.find(((meal => meal.id === parseInt(id))));
        if (data) {
            data.name = name;
            data.price = price;
            data.content = content;
            data.categoryID = categoryID;
        }
        res.json(data)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const modifieMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, content, categoryID } = req.body;
        //const { name } = req.body, { price } = req.body, { content } = req.body, { categoryID } = req.body
        if (name === undefined && price === undefined && content === undefined && categoryID === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." })
        }
        const connection = await getConnection();
        const data = await connection.meals.find(((meal => meal.id === parseInt(id))));
        if ((name) && (data.name = name)) {
            res.json(data)
        } else if ((price) && (data.price = price)) {
            res.json(data)
        } else if ((content) && (data.content = content)) {
            res.json(data)
        } else if ((categoryID) && (data.categoryID = categoryID)) {
            res.json(data)
        }
    }
    catch (error) {
        res.status(500);
        res.send(error.message)
    }
}





// try {
//     const db = getConnection();
//     const taskFound = db.data.tasks.find((t) => t.id === req.params.id);
//     if (!taskFound) return res.sendStatus(404);

//     taskFound.name = name;
//     taskFound.description = description;

//     db.data.tasks.map((t) => (t.id === req.params.id ? taskFound : t));

//     await db.write();

//     res.json(taskFound);


export const methods = {
    getDataRest,
    getMeals,
    getMealsbyId,
    addNewMeal,
    updateMeal,
    modifieMeal,
    // deleteMeal

}

