const {Router} = require('express')
const router = Router();
const {createProduct,modificar,deleteProduct,get_Products} = require('../controllers/products')
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos')
const {existeUsuarioPorID} = require('../helpers/db-validators')

router.get('/',get_Products)
router.post('/',createProduct)
router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorID),
    validarCampos
],modificar)
router.delete('/:id',[
    // esAdmin,
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorID),
    validarCampos
],deleteProduct)

module.exports = router;