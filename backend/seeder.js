import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js'
import products from './data/products.js'

import usersModel from './model/usersModel.js'
import productModel from './model/productModel.js'
import orderModel from './model/orderModel.js'


import connectdb from './config/db.js'
import ProductModel from './model/productModel.js'
import UserModel from './model/usersModel.js'


connectdb()

const importData = async () => {
    try { 
      await orderModel.deleteMany()
      await ProductModel.deleteMany()
      await UserModel.deleteMany()

      const createdUser = await UserModel.insertMany(users)
            const adminUser = createdUser[0]._id

            const sampleProduct = products.map(p=> { 
                return { ...p, user: adminUser}
            })
            await productModel.insertMany(sampleProduct)
            console.log('Data imported')
            process.exit
    }catch(error) { 
        console.error(error)
    }
}


const destroyData = async () => {
    try { 
      await orderModel.deleteMany()
      await ProductModel.deleteMany()
      await UserModel.deleteMany()

            console.log('data Destroyed')
            process.exit()
    }catch(error) { 
        console.error(error)
        process.exit()
    }
}

if(process.argv[2] === 'd') { 
    destroyData()
} else { 
    importData()
}