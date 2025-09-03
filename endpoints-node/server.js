import express from 'express';

const app = express();
const PORT = 5000;  /* Cuando está en mayúsculas ej: PORT significa que es constante */

// Endpoint raíz
app.get('/', (req, res) => {
    res.send('Este es un endpoint hecho con express');
});

// Endpoint con parámetro
app.get('/api/user/:id', (req, res) => {
    // Desestructuración correcta
    const { id } = req.params;
    res.send({ message: `El usuario con id ${id} es Pepito` });
});


//inicio en el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//query params 
app.get("/api/search",(req,res)=>{
    const {name , lastname } =req.query;
    res.json({
        firstName:name,
        lastname,
    });
//http://localhost:5000/api/search?name=Dylan&lastname=Aragon
});