Scenario
Let's try to put all the previously prepared elements together. Create a Tutoring class that will have two lists of users: students and teachers separately.

Define methods in it:

getStudentByName(name, surname) - which will return a student object with the given name and surname (or undefined if the student has not been added before)
getTeacherByName(name, surname) - which will return the teacher object with the given name and surname (or undefined if the teacher has not been added before)
getStudentsForTeacher(teacher) - which will return an array of students that teacher is able to tutor;
getTeacherForStudent(student) - which will return an array of teachers able to tutor the student;
addStudent(name, surname, email) - which will add a new student object to the list;
addTeacher(name, surname, email) - which will add a new teacher object to the list.
Use previously prepared classes and their methods (e.g. match).

Test your solution using the following code:

let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', sur