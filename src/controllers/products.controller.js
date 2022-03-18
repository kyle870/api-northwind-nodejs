import { getConnection, sql } from "../database/connection.js"

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
    let {nombres, apellidos} = req.body;
    
    if (nombres == null || apellidos == null) {
        return res.status(400).json({msg: 'Falta un campo'}) //400 es estatus de bad request
    }

    const pool = await getConnection();

    //definir consulta para insertar
    await pool.request()
    .input("nombres",sql.VarChar, 'Carlos')
    .input("apellidos",sql.VarChar, "Juanga")
    .query('Insert into dbo.empleados (nombres, apellidos) values(@nombres, @apellidos)');

    //console.log(`Nombres: ${nombres}, Apellidos: ${apellidos}`);
    res.json("Nuevo Empleado creado")
}