
// bubble sort 


// let arr = [1,3,2,5,6,4]

// for(let i =0 ; i<arr.length ;i ++){
  
//   for(let j = 0 ; j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//       [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//     }
//   }
// }

// console.log(arr)



// selection sort

// let arr = [3,5,32,7,74,1]

// for(let i = 0;i< arr.length;i++){
//   let min = i ;
//   for(let j = i+1;j<arr.length ; j++){
    
//     if(arr[j]<arr[min]){
//       min = j
//     }
//   }
  
//  [ arr[min],arr[i]] =[ arr[i],arr[min]]
// }

// console.log(arr)




// insertionSort



let arr = [2,4,1,5,25,6]

for(let i = 1 ; i <arr.length;i++){
  
  let key = arr[i]
  let j = i-1
  
  while(j>=0&&arr[j]>key){
    arr[j+1] = arr[j]
    j--
    
  }
   arr[j+1] = key
}
console.log(arr)






