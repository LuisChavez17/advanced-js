import express from "express";
import morgan from "morgan";
import colors from "colors";


const app = express();

app.set('port', process.env.PORT || 4000);

// import APIroutes from "./routes/product.routes";

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')} is listening`.rainbow);
});

// app.use("/api-restfull/meals",APIroutes);
