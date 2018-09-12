const assert = require('assert')
const {stringify, parse} = require('../query');

describe("the query package", function(){
    describe("the parse function", function(){
        it("should return an oject of all query parameters", function(){
            const query ='?by=kati-frantz&popular=true&category=nodejs'
            const actual = parse(query);
            const expected = {
                by: "kati-frantz",
                popular: "true",
                category: "nodejs"
            }
            assert.deepEqual(actual, expected); //deep equal function is great when comparing arrays and objects
        })
    })

    describe('the stringify function', function (){
        it("should return a query string when an object is passed to it", ()=> {
            
            const testObj= {
                by: "kati-frantz",
                popular: "true",
                category: "nodejs"
            }
            const actual= stringify(testObj);
            const expected = "by=kati-frantz&popular=true&category=nodejs";
            assert.equal(actual,expected);
        })
    })
})