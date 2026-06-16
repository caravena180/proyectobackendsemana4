// routes.js
const express = require('express');
const router = express.Router();
let productos = require('./data');


router.get('/productos', (req, res) => {
    res.status(200).json(productos);
});

router.post('/productos', (req, res) => {
    const { nombre, precio, categoria } = req.body;


    if (!nombre || precio === undefined || !categoria) {
        return res.status(400).json({ error: "Faltan campos obligatorios: nombre, precio y categoria." });
    }

    if (typeof precio !== 'number') {
        return res.status(400).json({ error: "El precio debe ser un valor numérico." });
    }

    
    const nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1; 

    const nuevoProducto = {
        id: nuevoId,
        nombre,
        precio,
        categoria
    };

    productos.push(nuevoProducto);
    res.status(201).json({ mensaje: "Producto creado exitosamente", producto: nuevoProducto });
});


router.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, precio, categoria } = req.body;

    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado." });
    }

    
    if (!nombre || precio === undefined || !categoria) {
        return res.status(400).json({ error: "Faltan campos obligatorios: nombre, precio y categoria." });
    }
    if (typeof precio !== 'number') {
        return res.status(400).json({ error: "El precio debe ser un valor numérico." });
    }

   
    productos[index] = { id, nombre, precio, categoria };
    res.status(200).json({ mensaje: "Producto actualizado correctamente", producto: productos[index] });
});


router.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);


    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado." });
    }


    const productoEliminado = productos.splice(index, 1);
    res.status(200).json({ mensaje: "Producto eliminado", producto: productoEliminado[0] });
});

module.exports = router;