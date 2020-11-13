import express from 'express'
import {getProduct, 
    getProductByID,
    deleteProduct,createProducts,updateProduct,productReview} from '../controllers/productController.js'

    import {protect,admin} from '../middleware/authmiddleware.js'

const router = express.Router()

//GET GET ALL PRODUCT
router.get('/', getProduct)


//GET GET PRODUCT
router.get('/:id',getProductByID)

//POST CREATE PRODUCT FOR ADMIN
router.post('/',protect,admin,createProducts)

//PUT UPDATE PRODUCT FOR ADMIN
router.put('/:id',protect,admin,updateProduct)

//DELETE PRODUCT FOR ADMIN
router.delete('/:id',protect,admin,deleteProduct)

//review products
router.post('/:id/reviews',protect,productReview)



export default router