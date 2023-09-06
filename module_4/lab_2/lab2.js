// write your code here
let myDecorator = function(fn){
    let collection = new Set(); // To store the arguments of the decorated function call. 
    
    return function(...args){
        // let result = fn(...args);
        let alreadyUsedItems = new Set(); // To store the items we've called already
        args.forEach(arg => {
            
            if(collection.has(arg)){
                alreadyUsedItems.add(arg);
            }
            collection.add(arg);
        });
        if(alreadyUsedItems.size > 0){
            let msg = "arguments already used: ";
            for(let elt of alreadyUsedItems){
                msg += elt;
                msg += ",";
            }
          msg =  msg.slice(0,msg.length-1)// remove the last colon
            console.log(msg);
        }
    }
}
let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5
