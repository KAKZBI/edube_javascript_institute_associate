Scenario
Modify the ExtendedUser class (rewrite it) by adding a static match method to it. The method should retrieve the teacher object, student object, and optionally a course name. Its task is to find the match between the student and the teacher.

In case the course name is not provided, the method should return:

an empty array if there is no match (the teacher does not teach courses the student is interested in, or teaches courses at a lower level)
an array with {course, level} objects, if the teacher teaches the courses the student is interested in.
If the course name is passed as the last argument, then the method should return the {course, level} object in case of a correct match, or undefined otherwise.

Test your solution using the following code:

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}