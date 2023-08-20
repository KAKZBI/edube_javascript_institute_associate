
let getRandomSet = function(m,n,flag1,flag2){
    // let finalSet = new Set();
    // let array = [];
    if(!flag1){
        let finalSet = new Set();
        while(finalSet.size<m){
         let number = Math.floor(Math.random()*(n+1));
         finalSet.add(number);
        }
        return finalSet;
    }
    else{
        let finalArray=[];
        while(finalArray.length<m){
             let number = Math.floor(Math.random()*(n+1));
            finalArray.push(number);
        }
        if(!flag2){
            return finalArray;
        }
        else {
            return finalArray.sort((a,b) => a-b);
        }
    }
}
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
