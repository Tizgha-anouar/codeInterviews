let log = console.log;
let levels = 10;
let res = [];
res[0] = [1];
res[1] = [1,1];

for(var level = 2;level<levels;level++){
    let prevLevel = res[level-1];
    if(prevLevel.length === 2){
        res.push([1,prevLevel[0] + prevLevel[1],1]);
        continue;
    }
 
    let data = [];
    prevLevel.forEach((item,index)=>{
        if(prevLevel.length != index + 1 ){
             data.push(item + prevLevel[index + 1 ]);
        }
    })
    res.push([1,...data,1])
}

log(res);
