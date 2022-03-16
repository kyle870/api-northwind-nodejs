import { config } from "dotenv"
config();

//console.log(process.env.PORT)

export default {
    port: process.env.PORT || 3000 //Si la variable de entorno para el puerto no existe, que use el puerto 3000
}