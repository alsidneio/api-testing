const {add} = require("./index");
const {test,assert} = require("./lib");

test("function that add two numbers", function(){
    const actual = add(3,4)
    const expected = 7
    
    assert.equal(actual,expected);
})