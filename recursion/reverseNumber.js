



let num = 1234

function reverse(n){
    let rev= 0
    while(n>0){
let last = n%10 
rev = rev*10+last
n = Math.floor(n/10)
    }
    return rev 
}




function reverse(n,rev=0){

if(n==0) return rev
let last = n %10;
rev = rev*10 +last;

return reverse(Math.floor(n/10),rev)

}

 console.log(reverse(1234))










