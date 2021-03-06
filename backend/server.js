import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import productRoute from './routes/productRoute.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import bodyParser from 'body-parser'
import path from 'path'
dotenv.config()


connectdb()

const app = express()

//accept json to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/api/products',productRoute)
app.use('/api/users',  userRoutes)
app.use('/api/orders',  orderRoutes)
app.use('/api/upload',uploadRoutes)



//env for paypal
app.get('/api/config/paypal',(req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))

//resolve the dirname bacause it need to work with es module
const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))


if(process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else { 

    app.get('/', (req, res)=> { 
        res.send('API is Running')
    })
    

}



//Error middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))