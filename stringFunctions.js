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

    let length_of_word = word.length;
    let length_of_match = match.length;


    for (let i=0, j=length_of_match; j<length_of_word+1; i++, j++){
        if (word.slice(i, j) == match){
            return true;
            }
            
        }
        return false;
    }


module.exports = {getLonger, greet, isSubstring};


