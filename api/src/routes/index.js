const { Router } = require('express');
const GetDogs = require('../Controllers/GetDogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get("/dogs", GetDogs)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
