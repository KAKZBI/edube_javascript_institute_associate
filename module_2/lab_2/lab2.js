// write your code here
class User{
    constructor({name, surname, email, role}){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
        };
    addCourse(course, level){
        this.courses.push({});
        this.courses[this.courses.length-1].course = course;
        this.courses[this.courses.length-1].level = level;
        };
    removeCourse(course){
        for(let i=0; i<this.courses.length;i++){
            if(this.courses[i].course===course){
                     this.courses.splice(i,1);
                    // console.log(this.courses[i])
                    break;
                }
            }
        };
    editCourse(course, level){
      let isFound = false;
        for(let i=0; i<this.courses.length;i++){
            if(this.courses[i].course===course){
                    this.courses[i].level = level;
                    isFound = true;
                    break;
                }
            }
            if(isFound == false) this.addCourse(course, level);
        }
    sendEmail(from, to, message) {
        this.messages.push({});
        this.messages[this.messages.length-1].from = from.email;
        this.messages[this.messages.length-1].to = to.email;
        this.messages[this.messages.length-1].message = message;
        };
        
    sendMessage(from, message){
        this.sendEmail(from, this, message);
        }


     showMessagesHistory(){
        for(let i=0; i<this.messages.length;i++){
            console.log(`${this.messages[i].from} -> ${this.messages[i].to} -> ${this.messages[i].message}`);
            }
        }
}
class ExtendedUser extends User{
    constructor({name, surname, email, role}){
    super({name, surname, email, role});
        }
    get fullName(){
        return this.name.concat(' ').concat(this.surname);
        }
    set fullName(name){
        let arrayName = name.split(' ');
        this.name = arrayName[0];
        this.surname = arrayName[1];
        }
    }
class Teacher extends ExtendedUser{
    constructor({name, surname, email}){
super({name, surname, email});
        this.role='Teacher';
        }
    };
class Student extends ExtendedUser{
    constructor({name, surname, email}){
    super({name, surname, email});
        this.role='Student';
        }
    };
 let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses
