function gradeGenerator(studentMarks) {
    let grade
// gradeGenerator is the function name. The student's marks is the only parameter required to generate the grade.
if (studentMarks > 100 || studentMarks < 0) {
    grade = 'No such mark'
// This ensures that the user does not input any mark less than 0 or higher than 100.
} else {
    if (studentMarks > 79) {
        grade = 'A'
    // any mark above 79 is an A
    } else {
        if (studentMarks > 59) {
            grade = 'B'
            //any mark above 59 but not above 79 is an B
        } else {
            if (studentMarks > 48) {
                grade = 'C'
                // any mark above 48 but below 59 is a C
            } else {
                if (studentMarks > 39) {
                    grade = 'D'
                    //any mark above 39 but below 48 is a D
                } else {
                    grade = 'E'
                    // a mark lower than 40 is an E
                   } 
                }
            }
        }
    }

return 'Your Grade is' + ' ' + grade
// This will be the output
}

console.log(gradeGenerator ());
// this is where the user enters the student's mark



