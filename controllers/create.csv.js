(function () {
  'use strict'

  angular.module('ClassCreatorApp')
    .controller('CreateCSVController', CreateCSVController)

  function CreateCSVController ($rootScope) {
    this.csv = null
    this.toCSV = () => {
      this.csv = null
      const students = $rootScope.courses.map(course => {
        return course.students.map(({ id, name, grade }) => {
          return {
            student_id: id,
            student_name: name,
            student_grade: grade,
            course_id: course.id,
            course_name: course.name,
            course_teacher: course.teacher
          }
        })
      }).reduce((a, b) => a.concat(b))

      const data = "data:text/csv;charset=utf-8," + Papa.unparse(students)
      const uri = encodeURI(data)
      this.csv = {
        href: uri,
        download: 'courses.csv'
      }
    }
  }
})()
