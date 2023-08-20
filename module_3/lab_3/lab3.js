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
    set email(add){
        let emailRegex = /^[a-z.]+@[a-z.]+\.[a-z.]+$/i;
        if(!emailRegex.test(add)){
            throw new Error('Bad email');
        }else this.#email = add;
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

class Users{
    users = new Map();
    
    add(name, surname, email){
        let user = new User(name, surname, email);
        this.users.set(email, user);
    }
    delete(email){
        this.users.delete(email);
    }
    get(email){
      return  this.users.get(email);
    }
    getAll(methodToSort){
     let allUsers = [];
     let usersIterator = this.users.values();
     let userExtracted = usersIterator.next();
     while(!userExtracted.done){
         allUsers.push(userExtracted.value);
         userExtracted = usersIterator.next();
     }
     switch(methodToSort){
        case 'firstName':
             allUsers.sort((a,b)=>a.firstName<b.firstName ? -1 : 1);
             break;
        case 'lastName':
             allUsers.sort((a,b)=>a.lastName<b.lastName ? -1 : 1);
             break;
        case 'email':
             allUsers.sort((a,b)=>a.email<b.email ? -1 : 1);
             break;
     }
      return allUsers;
    }
}
let users = new Users();
users.add("Xxxx", "Oooo", "dddd@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");

console.log(users.get("dddd@gmail.com").firstName);
//Here I had to change the instructions to match the User class previously created rules
console.log(users.getAll("firstName").map(u => u.firstName));// changed name to firstName
console.log(users.getAll("lastName").map(u => u.lastName));//changed surname to lastName
console.log(users.getAll("email").map(u => u.email));
