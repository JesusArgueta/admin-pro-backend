/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator')

const { getUsuarios, crearUsuarios } = require('../controllers/usuarios')

const router = Router();

router.get('/', getUsuarios );

router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('password','La password es obligatoria').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
    ]
    ,crearUsuarios 
);



module.exports = router;
