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
   //course has a default parameter because the parameter list shoud take 2 or 3 arguments
    static match(teacher, student, course=''){
            let matches = [];

            if(course != ''){
              let indexOfCourse = -1;
              for(let j=0; j<teacher.courses.length;j++){
                if (teacher.courses[j].course==course){
                  indexOfCourse = j;                  
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
              // console.log(course);
                for(let i=0; i<teacher.courses.length;i++){
                  
            for(let j=0; j<student.courses.length;j++){
              
                if(teacher.courses[i].course == student.courses[j].course
                 && teacher.courses[i].level >= student.courses[j].level){
                    // console.log(student.courses[j]);
                    matches.push(student.courses[j]);
                    }
                }
            }
            // console.log(matches);
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
class Tutoring {
     students = [];
     teachers = [];
    getStudentByName(name, surname){
        for(let i=0; i < this.students.length;++i){
            if(this.students[i].name==name && this.students[i].surname==surname){
                return this.students[i];
                }
            }
            return;
        };
    getTeacherByName(name, surname){
        for(let i=0; i < this.teachers.length;++i){
            if(this.teachers[i].name==name && this.teachers[i].surname==surname){
                return this.teachers[i];
                }
            }
            return;
        };
    getStudentsForTeacher(teacher){
        let teacherMentor = [];
        for(let i=0; i < this.teachers.length;++i){
            for(let j=0; j < this.students.length;++j){
                if(ExtendedUser.match(this.teachers[i], this.students[j]).length > 0){
                    teacherMentor.push(this.students[j]);
                    }
                }
            }
            return teacherMentor;
        }
    getTeacherForStudent(student){
        let studentMentors = [];
            for(let j=0; j < this.teachers.length;++j){
                if(/*ExtendedUser.match(this.teachers[j], student) ||*/ ExtendedUser.match(this.teachers[j],student).length > 0
                 ){
                  //  console.log(this.teachers[j])
                    studentMentors.push(this.teachers[j]);
                    }
                }

            return studentMentors;
        };
    addStudent(name, surname, email){
        let student = new Student({name, surname, email});
      // console.log(student)
        this.students.push(student);
        }
    addTeacher(name, surname, email){
        let teacher = new Teacher({name, surname, email});
        this.teachers.push(teacher);
        }
    }
class ExtendedTutoring extends Tutoring{
    sendMessages(from, to, message){
        for(let user of to){
            user.sendMessage(from, message);
            }
        }
    }
    
    let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message
