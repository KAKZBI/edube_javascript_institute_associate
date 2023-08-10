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
   
    static match(teacher, student, course=''){
            let matches = [];

            if(course != ''){
              let indexOfCourse = -1;
              for(let j=0; j<teacher.courses.length;j++){
                if (teacher.courses[j].course==course){
                  indexOfCourse = j;//We collect the index of the course in the array courses of the current teacher
                  
                  break;
                }
              }
              // console.log(indexOfCourse);
            for(let j=0; j<student.courses.length;j++){
                if(teacher.courses[indexOfCourse].course == student.courses[j].course){
                    return student.courses[j];
                    }
                }
            return undefined;
            }
            if(course == ''){
              console.log(course);
                for(let i=0; i<teacher.courses.length;i++){
                  
            for(let j=0; j<student.courses.length;j++){
              
                if(teacher.courses[i].course == student.courses[j].course
                 && teacher.courses[i].level >= student.courses[j].level){
                    matches.push(student.courses[j]);
                    }
                }
            }
        return matches;
                }
        
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
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
// console.log(teacher1.courses)
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]

teacher1.editCourse('maths', 1);
 match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}
