function getLonger(a, b){
    if (a == null || b == null){
        throw new Error("This function requires two arguments!"); 
    }

    if (typeof a !== 'string' || typeof b !== 'string'){
        throw new Error("Arguments must be strings!"); 
    }

    if (a.length >= b.length){
        return a
    } else {
        return b
    }
}

function greet(str){
    if (str == null || str.length==0){
         return 'Hi!'
    } else {
        return 'Hello, ' + str + '!';
    }

}

function isSubstring(word, match){
    if (word == null || match == null){
        throw new Error("This function requires two arguments!")
    } else if (typeof word !== 'string' || typeof match !== 'string'){
        throw new Error("Arguments must be strings!")
    } else if (word.length == 0){
        throw new Error("Arguments must have a length greater than zero!")
    } 

    for (let i=0; i<word.length; i++){
        let exact_match = ''
        let letter_of_word = word[i]
        console.log(letter_of_word)
        //Turn a string in an array
        // for loop match the run of the indexes. 


    }
}


module.exports = {getLonger, greet, isSubstring};