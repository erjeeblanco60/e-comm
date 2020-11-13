import express from 'express'

const router = express.Router()
import { addOrderItems,getOrderByID,updateOrderToPaid,getMyOrder,getAllOrder,updateOrderdelivered} from '../controllers/orderController.js'
import {admin, protect} from '../middleware/authmiddleware.js'



//CART -  Create new order 
router.post('/',protect,addOrderItems )

// ADMIN ORDER -  GET all order from a users
router.get('/',protect,admin,getAllOrder)

//USER-PROFILE  -  GET all user's order 
router.get('/myorders',protect,getMyOrder)

//USER PROFILE - GET the single order by ID
router.get('/:id',protect,getOrderByID)

//paypal
router.put('/:id/pay',protect,updateOrderToPaid)

//Delivered
router.put('/:id/deliver',protect,updateOrderdelivered)

export default router 