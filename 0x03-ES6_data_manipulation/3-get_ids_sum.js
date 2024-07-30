export default function getStudentIdsSum(array) {
  const ids = array.reduce((sum, student) => sum + student.id, 0);
  return ids;
}
