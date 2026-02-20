
// 🔢 Count Occurrences of a Number in Array

let num = [1,2,3,4,5,4,6]
let count = 0
for(let i = 0 ; i < num.length;i++){

if(num[i]==1){
    count++
}
}
console.log (count)





function countOccurance(arr,target,index =0  ){
if(arr.length<=1) return arr.length
let count = arr[index] === target?1:0
return count+countOccurance(arr,target,index)

}


console.log(countOccurrence([1,2,3,2,4,2], 2)); // 3