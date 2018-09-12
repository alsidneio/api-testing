// takes in ?by= kati-frantz&popular=true&category=nodejs and returns {by: "kati-frantz"}
const parse = (queryString) =>{
    if(queryString[0]=== '?'){
        queryString = queryString.substring(1) //gets rid of the "?"
    }
    
    let queries = queryString.split("&") //breaks string into array seperated by &
    const params ={}

    /*for each element on the array split by &, this function further splits that string by "="
     making two distinct strings, then uses the [0] element as a property in the parms object*/

    queries.forEach(query => {
        const queryObject = query.split('=')
        params[queryObject[0]] =queryObject[1];   
    });
     return params
}
const query ='?by=kati-frantz&popular=true&category=nodej'
const actual = parse(query);

/* pass in an object and give me the keys in an array, then for each element of that array
determine if the correspaonding key value is null or undefined , and if it is delete the key */
const removeEmpty = (obj) =>{
    Object.keys(obj).forEach((key)=> (obj[key]===null || obj[key]===undefined) && delete obj[key])
    return obj
}

//takes in the object {by:'kati-franz'} and returns ?by=katifranz
const stringify = (queryObject) => {
    queryObject = removeEmpty(queryObject)
    let queryString = ''
    for (let element of Object.keys(queryObject)){
        queryString =`${queryString}&${element}=${queryObject[element]}`
    }
    return queryString.substring(1)
}

module.exports = {
    stringify,
    parse
}