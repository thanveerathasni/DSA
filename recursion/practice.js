// function factorial (n){
//     if(n<=1) return 1 
// // console.log(n)
//   let res = n*factorial(n-1)
//   console.log(res)
//   return res

// }
// console.log(factorial(9))



// let res = 1
// for(let i = 1;i<=9;i++){

// res = res*i
// console.log(res)
// }




// Sum of N


// let res = 0
// for(let i = 1 ; i<=9;i++){

// res+=i
// }

// console.log(res)



function sum(n){
if(n<=1) return 1

return n+=sum(n-1)

}
console.log(sum(9))

