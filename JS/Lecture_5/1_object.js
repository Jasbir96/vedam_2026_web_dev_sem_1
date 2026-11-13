/***
 * |            |                           |
| ---------- | -------------------------- |
| Key        | Value                      |
| name       | "Aarav"                    |
| age        | 20                         |
| course     | "B.Tech CSE"               |
| subjects   | ["DSA", "Web Dev", "Math"] |
| isEnrolled | true                       |
1. Print the entire student object
2. Print only the name using dot notation
3. Print only the age using dot notation
4. Print the 2nd subject from the subjects array
5. Using bracket notation with a variable key = "course", print the course
6. Add a new key graduationYear = 2026
7. Update isEnrolled to false
8. Update age to 20 
9. Delete the name key
10. Print the final student object

* 
 * 
 * */ 

let student={
    name:"Aarav",
    age:20,
    course:"B.Tech CSE",
    subjects: ["DSA", "Web Dev", "Math"],
    isEnrolled:true
}

console.log(student);


//  Print only the name using dot notation
console.log(student.name);
console.log(student.age);
// 4. Print the 2nd subject from the subjects array
console.log(student.subjects[1]);

// 5. Using bracket notation with a variable key = "course", print the value of the  course
let keyHolder="course";
console.log(student[keyHolder]);

// 6. Add a new key graduationYear = 2026
// 7. Update isEnrolled to false
// 8. Update age to 25
// 9. Delete the name key
// 10. Print the final student object
student.graduationYear=2026;
student.isEnrolled=false;
student.age=25;
delete student.name;
console.log(student)

/**
 * object : collection of key and value pair where value can be any valid JS type
 * values : properties
 * function : methods
 * **/ 




