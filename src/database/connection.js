import sql from "mssql";

const dbSettings = {
    user: "sa",
    password: "12345678",
    server: "DESKTOP-6NC0OMV", //ip de la PC en uso
    database: "NominaUCN",
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.query("SELECT * from dbo.empleados")
        //console.log(result);
        return pool;
    } catch (error) {
        console.log(error);
    }

}

export {sql}

//getConnection();