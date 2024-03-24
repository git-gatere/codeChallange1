function gradeGenerator(studentMarks) {
    let grade

if (studentMarks > 100 || studentMarks < 0) {
    grade = 'No such mark'
} else {
    if (studentMarks > 79) {
        grade = 'A'
    } else {
        if (studentMarks > 59) {
            grade = 'B'
        } else {
            if (studentMarks > 48) {
                grade = 'C'
            } else {
                if (studentMarks > 39) {
                    grade = 'D'
                } else {
                    grade = 'E'
                   } 
                }
            }
        }
    }

return 'Your Grade is' + ' ' + grade
}

console.log(gradeGenerator ());



