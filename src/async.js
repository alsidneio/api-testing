const users = require('./db/users')

const findUserById = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user =users.find(user => user.id ==id)

            if(!user){
                return reject(new Error(`User with id: ${id} was not found `))
            }
            return resolve({
                message: "User found succesfully",
                user
            })
        },10)
    })
}

const findUserByEmail = (email) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const user = users.find(user => user.email == email)

            if (!user){
                return reject(new Error(`User email: ${email} was not found.`))
            }

            return resolve({
                message: `User found Succesfully.`,
                user
            })
        },10)
    })
}

module.exports = {
    findUserByEmail,
    findUserById
}
