function ceasarCipher(str, num){
    let newname = ''   
     for(i = 0; i < str.length; i++){
        let currentChar = str[i];
        newname += shiftChar(currentChar, num);
     }
     return newname
}

function shiftChar(char, shift) {
    let code = char.charCodeAt(0);

    if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } 
    else if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } 
    else {
        return char;
    }
}

module.exports = ceasarCipher;
