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
        for(let i=0; i<this.courses.length;i++){
            if(this.courses[i].course===course){
                    this.courses[i].level = level;
                    break;
                }
            }
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
let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});
student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message

