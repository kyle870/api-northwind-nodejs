//realizar un import del index general para tomar modularmente todo
import { getConnection, sql, queries } from "../database/index.js"

export const getProducts = async (req, res) => {
    try {
        const pool =  await getConnection(); //investigar que son los pool
        const result = await pool.request().query(queries.getAllProducts)
        //generar una respuesta que la puede consumir un cliente de la API
        res.json(result.recordset);        
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//realizar pruebas con postman para la API
/** 
 * {
 *  "nombres":"Kyle",
 *  "apellidos":"87" (opcional)
 * }
*/
export const createNewProduct = async (req, res) => {
    let {nombres, apellidos} = req.body;
    
    if (nombres == null || apellidos == null) {
        return res.status(400).json({msg: 'Falta un campo'}) //400 es estatus de bad request
    }

    try {
        
        const pool = await getConnection();
        //definir consulta para insertar
        await pool.request()
        .input("nombres",sql.VarChar, nombres) //poner la variable del campo a insertar
        .input("apellidos",sql.VarChar, apellidos)
        .query(queries.addNewProduct);
        //console.log(`Nombres: ${nombres}, Apellidos: ${apellidos}`);
        res.json("Nuevo Empleado creado")
    } catch (error) {
        res.status(500).send(error.message);
    }

}