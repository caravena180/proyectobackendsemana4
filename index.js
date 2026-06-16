// index.js
const express = require('express');
const rutas = require('./routes');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api', rutas);
app.get('/', (req, res) => {
    res.send("¡Servidor operativo! ingresa a la URL /api/productos para ver el inventario disponible.");
});
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});