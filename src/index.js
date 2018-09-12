const add = (num1,num2) =>{
    
    //making  sure we get two parameters for this funciton 
    if(! num1||!num2){
        throw new Error("two parameters arerequired for the add funciton")
    }
    return num1 + num2;
}

module.exports = {
    add
}
