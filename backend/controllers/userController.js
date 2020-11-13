import express from 'express'
import AsyncHandler from 'express-async-handler'
import ProductModel from '../model/productModel.js'
import User from '../model/usersModel.js'
import generateToken from '../utils/generateToken.js'


// @desc Register user
//@route POST /api/users/prifile
//@access Public Route
const registerUser = AsyncHandler(async(req,res) => { 
    const {name,email, password} = req.body



    const existingUser = await User.findOne({email})

    if(existingUser) { 
        res.status(400)
        throw new Error('User Already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })
    
    if(user) {
        res.status(201)
        res.json({ 
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id.toString()),
        })  
    } else { 
        res.status(400)
        throw new Error('Invalid data')
    }

})





// @desc Auth user & get token
//@route POST /api/users/login
//@access Public Route
const authUser = AsyncHandler(async(req,res) => { 
        const {email, password} = req.body


        const user = await User.findOne({email})

            if(user && (await user.matchPassword(password)))  { 
                return res.json({ 
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id.toString()),
                })  

            } else  { 
                res.status(404) 
                throw new Error('Unable to login')
            }
})

// @desc Get User
//@route Get /api/users/prifile
//@access Private Route
const getUserProfile = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

// @desc update User
//@route PUT /api/users/prifile
//@access Private Route
const updateUserProfile = AsyncHandler(async(req,res) => { 
    // console.log(req.user)

    const user = await User.findById(req.user._id)
    

    if(user) {
       user.name = req.body.name || user.name
        user.email = req.body.email || user.email

            if(req.body.password) { 
                user.password = req.body.password
            }

            const updatedUser = await user.save()

            return res.json({ 
                _id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(user._id.toString()),
            })  

    } else { 
        res.status(401)
        throw new Error('User not found')
    }
})

//@desc GET ALL USER
//@route Get /API/user

const getUser = AsyncHandler(async(req,res) => { 
    const users = await User.find({})
    res.json(users)

})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

// @desc    Get user by Id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserbyID = AsyncHandler(async (req, res) => {
    
    const user = await User.findById(req.params.id).select('-password')
  
    if (user) {
        res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })


// @desc update User
//@route PUT /api/users/prifile
//@access Private Route
const updateUser = AsyncHandler(async(req,res) => { 


    const user = await User.findById(req.params.id)
    

    if(user) {
       user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin

            const updatedUser = await user.save()

            return res.json({ 
                _id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
            })  

    } else { 
        res.status(401)
        throw new Error('User not found')
    }
})



export {authUser,
    getUserProfile,
    registerUser, 
    updateUserProfile,
    getUser,
    deleteUser,
    updateUser,
    getUserbyID}


