const express = require("express");
require("dotenv").config();

const cors = require("cors");
const { dbConnection } = require("./database/config");

//const cors = require("cors");
//const { dbConnection } = require("./database/config");
//console.log("Helladaso World");

//crear el servidor de express
const app = express();

//base de datos
dbConnection();

//cors
app.use(cors());

//directorio publico
//use es un midleware que se ejecuta siempre que pasa por un lugar
app.use(express.static("public"));

//variables de entorno
require("dotenv").config();

//Rutas
//sin routes
// app.get("/", (req, res) => {
//   console.log("Hello World");
//   res.json({ ok: true });
// });

//lectura y parseo del body
app.use(express.json());

//con routes
app.use("/api/auth", require("./routes/auth"));

//escuchar peticiones en el puerto 4000
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
