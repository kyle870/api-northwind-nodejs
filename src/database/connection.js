import sql from "mssql";

const dbSettings = {
    user: "fvirtual",
    password: "Ufv>2022",
    server: "192.168.1.32", //ip de la PC en uso
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