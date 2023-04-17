const {Router} = require('express')
const router = Router();
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos')
const {verificarEmail} = require('../helpers/db-validators')
const {get_controller,nuevo_usuario} = require('../controllers/get_controller')


router.get('/',get_controller)

router.post('/',[
    check('nombre', "El nombre es obligatorio").not().isEmpty(),
    check('password', "Es obligatorio y debe tener 6 caracteres").isLength({min:6}),
    check('correo').custom( verificarEmail ),
    check('rol',"No es un rol permitido").isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
],nuevo_usuario)

module.exports = router;