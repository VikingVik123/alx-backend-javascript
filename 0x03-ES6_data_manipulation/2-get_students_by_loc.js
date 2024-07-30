export default function getStudentsByLocation(student, location) {
  const newArray = student.filter((student) => student.location === location);
  return newArray;
}
