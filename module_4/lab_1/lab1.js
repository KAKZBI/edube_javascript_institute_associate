// write your code here
class MyIterable{
    #data = new Set();
    add(element){
      if(!this.#data.has(element)){
      this.#data.add(element);
        // ++this.length;
      }
       
    };
    del(element){
       if(this.#data.has(element)){
      this.#data.delete(element);
        // --this.length;
      }
    };
    get length(){ return this.#data.size;}
         
    has(element){
        return this.#data.has(element);
    }
    [Symbol.iterator]= function*(){
        for(let element of this.#data){
            yield element;        }
    }
}
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); 
