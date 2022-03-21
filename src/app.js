import express from "express"
import config from "./config.js"
import productsRoutes from "./routes/products.routes.js"

const app = express();

//responder con hola mundo si se hace un get al home
app.get('/', function (req, res) {
    res.send("<h1>Home Page</h1>");
})

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(productsRoutes);
export default app;