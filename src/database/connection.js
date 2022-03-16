import sql from "mssql";

const dbSettings = {
    user: "sa",
    password: "12345678",
    server: "192.168.15.170", //ip de la ma
    database: "NominaUCN",
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.query("SELECT distinct top 10 CIF, Estado from Docentes")
        //console.log(result);
        return pool;
    } catch (error) {
        console.log(error);
    }

}
getConnection();