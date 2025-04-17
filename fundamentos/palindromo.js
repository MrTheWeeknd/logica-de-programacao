const ePalindromo = (palindromo) => {
    if(palindromo === palindromo.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(ePalindromo('lucas'));