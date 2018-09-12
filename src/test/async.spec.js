const assert = require("assert")

const {findUserByEmail,findUserById} = require("../async")
describe("The async tests", () =>{
    describe("find user by ID test", ()=>{
        it("should return found user data by ID",()=>{
            return findUserById(1).then(result=>{        //this line returns the promise 
                assert.equal(result.user.name, "alsidneio")
            })
           
        })

        it("should throw an error if a user is not found", ()=>{
            return findUserById(3547).catch(error =>{
                assert.equal(error.message, `User with id: 3547 was not found `)
            })
        })

        it("should return user found by id", async()=>{
            const result = await findUserById(2)
            assert.equal(result.user.name, "Deon")

        }) 
    })

    describe("find user by email test",() =>{
        it("should return user data by email",async()=>{
            const result = await findUserByEmail("asyma@gmail.com")
            assert.equal(result.user.age, 22)
        })

        it("should throw an error if a user is not found by email", ()=>{
            return findUserByEmail("hiro@FileReader.com").catch(error =>{
                assert.equal(error.message, `User email: hiro@FileReader.com was not found.`)
            })
        })

       
    })
})