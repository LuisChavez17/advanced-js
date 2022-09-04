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
        if (!data){
            res.status(404).json({ message: "Bad Request. ID not founded." });
            return;
        }
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
        if (!data){
            res.status(404).json({ message: "Bad Request. ID not founded." });
            return;
        } else if (data) {
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
        if (!data){
            res.status(404).json({ message: "Bad Request. ID not founded." });
            return;
        } else if ((name) && (data.name = name)) {
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

const deleteMeal = async (req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const data = await connection.meals.find(((meal => meal.id === parseInt(id))));
        if (!data){
            res.status(404).json({ message: "Bad Request. ID not founded." });
            return;
        }   
        // const updateMeals = connection.meals.splice(data, 1);
        const updateMeals = await connection.meals.filter(((meal => meal.id !== parseInt(id))));
        connection.meals = updateMeals;
        res.json(updateMeals)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

// const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
//                 if (indexFounded !== -1) {
//                     const shoesCopy = [ ...this.shoes ];
//                     shoesCopy.splice(indexFounded, 1);
//                     this.shoes = [ ...shoesCopy ];
//                     resolve();
//                 }

// xport const deleteTask = async (req, res) => {
//     const db = getConnection();
//     const taskFound = db.data.tasks.find((t) => t.id === req.params.id);
//     if (!taskFound) res.sendStatus(404);
  
//     const newTasks = db.data.tasks.filter((t) => t.id !== req.params.id);
//     db.data.tasks = newTasks;
//     await db.write();
  
//     return res.json(taskFound);
//   };

// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     if (id) {
//         _.each(movies, (movie, i) => {
//             if (movie.id == id) {
//                 movies.splice(i, 1);
//             }
//         });
//         res.json(movies);
//     }


export const methods = {
    getDataRest,
    getMeals,
    getMealsbyId,
    addNewMeal,
    updateMeal,
    modifieMeal,
    deleteMeal
}

