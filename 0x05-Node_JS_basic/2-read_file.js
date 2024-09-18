const fs = require('fs');
/**
 * Function to read from a csv file
 */

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }
    const header = rows[0].split(',');
    const students = {};
    let totalStudents = 0;
    for (let i = 1; i < rows.length; i++) {
      const student = rows[i].split(',');
      if (student.length === header.length) {
        totalStudents += 1;
        const field = student[3];
        const firstName = student[0];
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
