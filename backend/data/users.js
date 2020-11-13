import bcrypt from 'bcryptjs'

const users = [
    { 
    name: 'Admin User',
    email: 'erjeeblanco60@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{ 
    name: 'Erjee',
    email: 'erjeeblanco1@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
},
{ 
    name: 'raizethy',
    email: 'erjeeblanco2@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
},
]

export default users