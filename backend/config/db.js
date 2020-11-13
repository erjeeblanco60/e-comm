import mongoose from 'mongoose'

// MONGO_URI = mongodb://127.0.0.1:27017/econ 
const connectdb = async () => {
    try { 

            const conn = await mongoose.connect(process.env.MONGO_URI,

                {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
                })
                    console.log(`Database Connected:${conn.connection.host}`)
    } catch(error) { 
            console.log(error)
            process.exit(1)
    }

}

export default connectdb




// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseN = 'story'

// MongoClient.connect(connectionURL,{useNewUrlParser: true}, (error,client)=> {
//             if (error) { 
//                return console.log('Unable to connect to database')
//              } else { 
              

//                 const db = client.db(databaseN)
//              //insert 1 documents
//              db.collection('users').insertOne({ 
//                 name: 'Erjee',
//                 age: 22
//               },(error, result)=> { 
//                 if( error ) {
//                   return console.log('Unable to insert')
//                 }
//                 console.log(result.ops)

//               })

                        
//                 }
//             })
            