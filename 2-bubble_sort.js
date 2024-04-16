let log = console.log;
let arr = [3,2,0,4,6,7,1];

for(var curr = 0 ; curr<arr.length -1 ;curr++){
   for(var i = 0 ; i < arr.length - curr ; i++){
       if(arr[i] > arr[i+1]){
           [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
       }
       //always the last is in sort so, we reduce the array - i
   }
}

log(arr);