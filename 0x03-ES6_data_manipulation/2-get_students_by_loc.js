export default function getStudentsByLocation(array, location) {
    const newArray = array.filter(student => student.location === location);
    return newArray;
}
