const {Router} = require('express')
const router = Router();
const {createProduct,modificar,deleteProduct,get_Products,carrito} = require('../controllers/products')
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar_campos')
const {existeObjectoPorID} = require('../helpers/db-validators')
const {validarJWT} = require('../middlewares/validarJWT')

router.get('/',get_Products)
router.post('/',[
    validarJWT,
    check('producto', "El producto es obligatorio").not().isEmpty(),
    validarCampos
],createProduct)
router.put('/:id',[
    validarJWT,
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeObjectoPorID),
    validarCampos
],modificar)
router.delete('/:id',[
    // esAdmin,
    validarJWT,
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeObjectoPorID),
    validarCampos
],deleteProduct)
router.get('/agregar/:id',carrito)

module.exports = router;