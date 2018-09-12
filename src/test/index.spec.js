//javascript has a native assertion library, 'assert'
const assert = require ("assert");
const  { add } = require ("./../index");

describe('The ADD function test', function (){
    it("should return 11 for arguments 5 & 6", function(){
        const actual = add(5,6);
        const expected = 11;
        assert.equal(expected,actual); //An assertion is a check in the code 
    })

    it("Should throw an error if arguments are not passed", function(){
        assert.throws(()=> {
            add()
        })
    })
})

