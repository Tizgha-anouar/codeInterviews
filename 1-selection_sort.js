let log = console.log;
let arr = [20,0,0.5,0.4];

for(var curr = 0 ; curr<arr.length - 1; curr++){
    let min = curr; // on se pose
    
    for(var i = curr + 1; i < arr.length; i++){
        if(arr[min] > arr[i]){
            min = i;
        }
    }
    [arr[curr],arr[min]]=[arr[min],arr[curr]]
}

log(arr); // [ 0, 0.4, 0.5, 20 ]