import app from "./app.js";
//import './database/connection.js';
//app = require('./app')

app.listen(app.get('port'))

console.log('server on port',app.get('port'))