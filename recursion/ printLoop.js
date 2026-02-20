function printRec(n){

if(n==0) return
printRec(n-1)
console.log(n)

}
printRec(5)