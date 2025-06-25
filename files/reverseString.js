function reverseString(str){
    if(typeof str !== 'string' ){
        return "error"
    }else{
        let reversedstring = ''
        for(let i = str.length - 1; i >= 0; i--){
            reversedstring += str[i]
        }
        return reversedstring
    }
    
}

// rodolfo = length of 7

module.exports = reverseString;