const {Router, response} = require('express')
const router = Router();
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos')
const {verificarEmail} = require('../helpers/db-validators')
const {sign} = require('../controllers/sign_controller')


router.post("/",[
    check('correo', "El nombre es obligatorio").not().isEmpty(),
    check('password', "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
],sign)


module.exports = router;