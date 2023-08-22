const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const userRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 9000; //Esta variable de ambiente nos toma un puerto del servidor o el 9000

//Middelware
app.use(express.json()); //Esta se usa para que nuestra api nos entienda el formato json
app.use('/api', userRoutes);

//mongo db conection
mongoose.connect(process.env.URL_MONGO_BD)
.then(()=>console.log('conectado a BD'))
.catch((error)=>console.log(`Error: ${error}`))


app.listen(port, ()=> console.log(`Esuchando por http://localhost:${port}`))