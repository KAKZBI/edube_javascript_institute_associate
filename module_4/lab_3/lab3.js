// write your code here
let getPromiseArray = function(arr){
    let promiseArr = [];
    arr.forEach(arg =>{
        if(Number.isInteger(arg) && arg > 0){
            let p = new Promise((resolve, reject) => setTimeout(()=>resolve(arg), arg));
            promiseArr.push(p);
        }else {
            let p = new Promise(function(resolve,reject){reject (new Error(`${arg} is not a positive number`))});
             promiseArr.push(p);
        }
    });
    return promiseArr;
}
let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer
