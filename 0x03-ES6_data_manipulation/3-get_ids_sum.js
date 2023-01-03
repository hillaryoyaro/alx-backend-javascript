/**
 * Retrieves the sum of ids of a list of students.
 * @params array of students - The list of students.
 * @author Hillary Oyaro <https://github.com/hillaryoyaro>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
