import express from 'express'
import {authUser,registerUser, 
    getUserProfile,updateUserProfile,getUser,deleteUser,
    updateUser,
    getUserbyID } from '../controllers/userController.js'

import {protect,admin} from '../middleware/authmiddleware.js'

const router = express.Router()

//POST REGISTER-USER
router.post('/', registerUser)

//POST LOGIN-USER
router.post('/login', authUser)

//GET PROFILE-USER
router.get('/profile',protect, getUserProfile)

//PUT UPDATE-USER PROFILE
router.put('/profile',protect, updateUserProfile)

//GET ADMIN USER LIST
router.get('/',protect, admin, getUser)

//DELETE ADMIN DELETE USER
router.delete('/:id',protect,admin,deleteUser)

//GET GET-ALL USER 
router.get('/:id',protect,admin,getUserbyID)

//PUT UPDATE-USER BY ADMIN
router.put('/:id', protect,admin,updateUser)



export default router