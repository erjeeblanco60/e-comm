import jwt from 'jsonwebtoken'
import AsyncHandler from 'express-async-handler'
import User from '../model/usersModel.js'

const protect = AsyncHandler (async (req,res,next) => { 
        let token

        if (req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')) {   

                   try { 
                        token = req.headers.authorization.replace('Bearer ','')
                        const decoded = jwt.verify(token, process.env.JWT_SECRET)
                        req.user = await User.findById(decoded.id).select('-password')

                        next()
                   } catch (error) { 
                        res.status(401)
                        throw new Error('Not authorize')
                   }
         }
                     
       if (!token) { 
        res.status(401)
        throw new Error('Not authorize')
       }
})

const admin = (req, res, next) => { 
     if(req.user && req.user.isAdmin) { 
          next()
     } else { 
          res.status(401)
          throw new Error('Not authorize as an admin')
     }
}


export {protect,admin}