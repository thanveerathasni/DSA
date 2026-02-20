function palindrome(n){


function reversed(n, rev=0){

if(n===0) return rev
return reversed(Math.floor(n/10),rev*10)

}
return n === reversed(n)

}

console.log(palindrome(121)); // true
console.log(palindrome(123)); // false