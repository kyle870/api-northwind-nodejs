import { getConnection } from "../database/connection.js"

export const getProducts = async (req, res) => {
    const pool =  await getConnection(); //investigar que son los pool
    const result = await pool.request().query('SELECT * FROM empleados')

    console.log(result);
    //generar una respuesta que la puede consumir un cliente de la API
    res.json(result.recordset);
};

//realizar pruebas con postman para la API
/** 
 * {
 *  "nombres":"Kyle",
 *  "apellidos":"87" (opcional)
 * }
*/
export const createNewProduct = async (req, res) => {
    const {nombres, apellidos} = req.body;

    if (nombres == null || apellidos == null) {
        return res.status(400).json({msg: 'Falta un campo'})
    }
    console.log(nombres, apellidos);
    res.json()
}