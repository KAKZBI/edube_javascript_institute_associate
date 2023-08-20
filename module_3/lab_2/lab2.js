// write your code here
let User = class{
    #firstName;
    #lastName;
    #email;
    constructor(firstName, lastName, email){
        let nameRegex = /^[A-Z][a-zA-Z]+$/;
        let emailRegex = /^[a-z.]+@[a-z.]+\.[a-z.]+$/i;
        if(!nameRegex.test(firstName)) {
            throw new Error('Bad first name');
        }
        else  this.#firstName = firstName;
        if(!nameRegex.test(lastName)){
           throw new Error('Bad last name'); 
        } 
        else  this.#lastName = lastName;
        if(!emailRegex){
            throw new Error('Bad email');
        }else this.#email = email;
         
    }
    get email(){
        return this.#email;
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    set email(new_email){
        let emailRegex = /^[a-z.]+@[a-z.]+\.[a-z.]+$/i;
        if(!emailRegex.test(new_email)){
            throw new Error('Bad email');
        }else this.#email = new_email;
    }
    set firstName(name){
        let nameRegex = /^[A-Z][a-zA-Z]+$/;
        if(!nameRegex.test(name)) {
            throw new Error('Bad first name');
        }
        else  this.#firstName = name;
    }
    set lastName(name){
        let nameRegex = /^[A-Z][a-zA-Z]+$/;
        if(!nameRegex.test(name)){
           throw new Error('Bad last name'); 
        } 
        else  this.#lastName = name;
    }
}
try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1.email);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message);
}
