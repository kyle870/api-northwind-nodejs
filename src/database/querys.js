export const  queries = {
    getAllProducts: 'SELECT * FROM empleados', 
    addNewProduct: 'Insert into dbo.empleados (nombres, apellidos) values(@nombres, @apellidos)'
}