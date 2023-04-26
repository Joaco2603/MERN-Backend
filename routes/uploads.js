const {Router} = require('express')
const router = Router();
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos');
const { cargarArchivo } = require('../controllers/uploads');

router.post('/',cargarArchivo) 

module.exports = router